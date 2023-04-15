# Python 3 code to rename multiple
# files in a directory or folder
 
# importing os module
import os
folder = "dataset/ai-generated/"

original_filenames = os.listdir(folder)
for count, filename in enumerate(original_filenames):
    src = f"{folder}/{filename}"
    dst = f"{folder}/ai-generated-{count}.jpg"
    os.rename(src, dst)
