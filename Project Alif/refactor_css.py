import os

target_file = r"C:\Users\User\Downloads\PROJECTS\Project Alif\css\style.css"

with open(target_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    line_num = i + 1
    if 980 <= line_num <= 1251:
        continue
    new_lines.append(line)

with open(target_file, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
    
print("css/style.css cleaned.")
