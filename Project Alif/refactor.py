import os

target_file = r"C:\Users\User\Downloads\PROJECTS\Project Alif\index.html"

with open(target_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    line_num = i + 1
    if line_num == 334:
        new_lines.append('  <link rel="stylesheet" href="/css/style.css" />\n')
        continue
    if 334 < line_num <= 1904:
        continue
        
    if line_num == 2339:
        new_lines.append('  <script src="/js/main.js" defer></script>\n')
        continue
    if 2339 < line_num <= 2701:
        continue
        
    new_lines.append(line)

with open(target_file, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
    
print("index.html refactored.")
