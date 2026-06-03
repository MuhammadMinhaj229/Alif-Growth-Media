import os

files_to_process = {
    r"C:\Users\User\Downloads\PROJECTS\Project Alif\thank-you.html": "centered-layout",
    r"C:\Users\User\Downloads\PROJECTS\Project Alif\privacy-policy.html": "document-layout",
    r"C:\Users\User\Downloads\PROJECTS\Project Alif\terms-and-conditions.html": "document-layout"
}

fonts_and_styles = """  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap" rel="stylesheet">
  <!-- Shared Styles -->
  <link rel="stylesheet" href="/css/pages.css" />
"""

for filepath, body_class in files_to_process.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    in_style = False
    
    for line in lines:
        if line.strip() == '<style>':
            in_style = True
            new_lines.append(fonts_and_styles)
            continue
        if line.strip() == '</style>':
            in_style = False
            continue
        if in_style:
            continue
            
        if line.strip() == '<body>':
            new_lines.append(f'<body class="{body_class}">\n')
            continue
            
        new_lines.append(line)
        
    # strip trailing empty lines
    while new_lines and new_lines[-1].strip() == '':
        new_lines.pop()
        
    if new_lines and not new_lines[-1].endswith('\n'):
        new_lines[-1] += '\n'
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
        
print("Secondary pages refactored.")
