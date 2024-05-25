from flask import Flask, request, jsonify
import torch
from transformers import AutoTokenizer, AutoConfig, AutoModelForSequenceClassification
from safetensors.torch import load_file
import pandas as pd
from collections import Counter

# Paths to your tokenizer and model files
tokenizer_path = "E:/Final-Year-Project/Saved/tokenizer"
model_path = "E:/Final-Year-Project/Saved/model/model.safetensors"
config_path = "E:/Final-Year-Project/Saved/model/config.json"
csv_path = 'E:/Final-Year-Project/Saved/diseasefinalScrubbed.csv.xls'  # Path to your CSV file

# Load the tokenizer
tokenizer = AutoTokenizer.from_pretrained(tokenizer_path)

# Load the model configuration
config = AutoConfig.from_pretrained(config_path)

# Load the model with the configuration
model = AutoModelForSequenceClassification.from_config(config)

# Load the model weights from the safetensors file
state_dict = load_file(model_path)

# Load the state dict into the model
missing_keys, unexpected_keys = model.load_state_dict(state_dict, strict=False)
print("Missing keys:", missing_keys)
print("Unexpected keys:", unexpected_keys)

# Load the CSV file with the appropriate encoding
try:
    df1 = pd.read_csv(csv_path, encoding='utf-8')
except UnicodeDecodeError:
    df1 = pd.read_csv(csv_path, encoding='ISO-8859-1')  # Alternative encoding

# Define a route for model inference

def predict(input_text):
    # Get the input text from the request
    input_text = request.json['text']
    
    # Tokenize and encode input text
    tokenized_inputs = tokenizer(input_text, padding=True, truncation=True, return_tensors="pt")
    
    # Ensure that inputs and model are on the same device
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    tokenized_inputs = {key: value.to(device) for key, value in tokenized_inputs.items()}
    model.to(device)
    
    # Perform inference
    with torch.no_grad():
        model_outputs = model(**tokenized_inputs)
    
    # Process model outputs
    logits = model_outputs.logits
    probabilities = torch.softmax(logits, dim=1)
    predicted_labels = torch.argmax(probabilities, dim=1)
    
    # Map label IDs to text labels
    label_map = {label: idx for idx, label in enumerate(df1['Disease'].unique())}
    label_map_inverse = {v: k for k, v in label_map.items()}
    predicted_label_text = label_map_inverse[predicted_labels.item()]
    
    # Return the predicted label as JSON response
    return jsonify({'prediction': predicted_label_text})
