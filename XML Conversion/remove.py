def remove_extra_blank_lines(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()

    # Remove extra blank lines
    modified_lines = [line for line in lines if line.strip() != '']

    with open(filename, 'w') as file:
        file.writelines(modified_lines)

# Example usage
filename = 'sample.txt'  # Change this to the path of your text file
remove_extra_blank_lines(filename)
print("Extra blank lines removed from the file:", filename)
