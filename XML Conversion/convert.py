import xml.etree.ElementTree as ET

# Parse the XML file

# parser = ET.XMLParser(encoding="utf-8")
# tree = ET.fromstring("sample.xml", parser=parser)
tree = ET.parse('sample.xml')
print("hello")
root = tree.getroot()

# # Define a function to extract information from DiseaseGroup
# def extract_disease_info(disease_group):
#     diseases = []
#     for disease_name in disease_group.findall('DiseaseName'):
#         disease = {}
#         disease['Name'] = disease_name.find('Name').text
#         disease['Description'] = disease_name.find('Description').text

#         # Extract Etiology
#         etiology = [item.text for item in disease_name.find('Etiology').findall('EtiologyLineItem')]
#         disease['Etiology'] = etiology

#         # Extract Clinical Features
#         clinical_features = [item.text for item in disease_name.find('ClinicalFeatures').findall('ClinicalFeaturesLineItem')]
#         disease['ClinicalFeatures'] = clinical_features

#         # Extract Diagnosis
#         diagnosis = [item.text for item in disease_name.find('Diagnosis').findall('DiagnosisLineItem')]
#         disease['Diagnosis'] = diagnosis

#         # Extract Investigations
#         investigations = [item.text for item in disease_name.find('Diagnosis').find('Investigations').findall('InvestigationsLineItem')]
#         disease['Investigations'] = investigations

#         diseases.append(disease)

#     return diseases

# # Extract information from each DiseaseGroup
# disease_groups = []
# for disease_group in root.findall('DiseaseGroup'):
#     disease_group_name = disease_group.text.strip()
#     diseases = extract_disease_info(disease_group)
#     disease_groups.append({disease_group_name: diseases})

# # Print the extracted information
# for group in disease_groups:
#     for key, value in group.items():
#         print(key)
#         for disease in value:
#             print("Name:", disease['Name'])
#             print("Description:", disease['Description'])
#             print("Etiology:", disease['Etiology'])
#             print("Clinical Features:", disease['ClinicalFeatures'])
#             print("Diagnosis:", disease['Diagnosis'])
#             print("Investigations:", disease['Investigations'])
#             print()
