cd notebook
jupyter nbconvert --to script --no-prompt --TemplateExporter.exclude_markdown=True nb.ipynb
python nb.py