import os
from PIL import Image, ImageFilter
import numpy as np

p1 = r'C:\Users\THIS PC\.gemini\antigravity-ide\brain\2eed2e2a-cfa1-4ea5-9d97-f67cb8e58750\.user_uploaded\media_1792635947140.png'
p3 = r'C:\Users\THIS PC\.gemini\antigravity-ide\brain\2eed2e2a-cfa1-4ea5-9d97-f67cb8e58750\.user_uploaded\media_1792636030613.png'
assets_dir = r'C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\assets'

# ==============================================================================
# 1. PROCESS CHIM LẠC (IMAGE 3) INTO TRANSPARENT PNGS
# ==============================================================================
im3 = Image.open(p3).convert('RGBA')
arr3 = np.array(im3, dtype=float)

# Detect golden yellow: high red, high green, low blue
r, g, b, a = arr3[:, :, 0], arr3[:, :, 1], arr3[:, :, 2], arr3[:, :, 3]

# Yellow metric: (r + g) / 2 - b
yellow_metric = (r + g) / 2.0 - b
# Threshold: yellow lines have yellow_metric > 100
mask_yellow = yellow_metric > 80

out_arr3 = np.zeros_like(arr3, dtype=np.uint8)
# Map yellow pixels to vibrant imperial gold: #f59e0b / #fbbf24
# We can calculate alpha smoothly based on yellow metric
alpha = np.clip((yellow_metric - 40) / 80.0 * 255, 0, 255).astype(np.uint8)

# Colorize to rich golden amber
out_arr3[:, :, 0] = 251 # R: 251 (#fbbf24)
out_arr3[:, :, 1] = 191 # G: 191
out_arr3[:, :, 2] = 36  # B: 36
out_arr3[:, :, 3] = alpha

im_chim_lac = Image.fromarray(out_arr3, mode='RGBA')

# Crop to bounding box
bbox = im_chim_lac.getbbox()
im_chim_lac_cropped = im_chim_lac.crop(bbox)
pair_path = os.path.join(assets_dir, 'chim_lac_pair.png')
im_chim_lac_cropped.save(pair_path, 'PNG')
print(f'Saved Chim Lac Pair: {pair_path} ({im_chim_lac_cropped.size})')

# Crop single large Chim Lac (right bird)
# In im_chim_lac, right bird starts around x = 400
w, h = im_chim_lac.size
right_box = (380, 0, w, h)
im_single = im_chim_lac.crop(right_box)
single_bbox = im_single.getbbox()
im_single_cropped = im_single.crop(single_bbox)
single_path = os.path.join(assets_dir, 'chim_lac_single.png')
im_single_cropped.save(single_path, 'PNG')
print(f'Saved Single Chim Lac: {single_path} ({im_single_cropped.size})')


# ==============================================================================
# 2. PROCESS TRỐNG ĐỒNG ĐÔNG SƠN (IMAGE 1) INTO GLOWING GOLD ROTATING ARTIFACT
# ==============================================================================
im1 = Image.open(p1).convert('RGBA')
arr1 = np.array(im1, dtype=float)
h1, w1 = arr1.shape[:2]
cx1, cy1 = w1 / 2.0, h1 / 2.0
Y1, X1 = np.ogrid[:h1, :w1]
dist1 = np.sqrt((X1 - cx1)**2 + (Y1 - cy1)**2)

# Drum radius is 320px
drum_radius = 320.0
# Smooth edge mask
edge_mask = np.clip((drum_radius + 1.5 - dist1) / 3.0, 0, 1)

# Extract lightness of the lines (white lines on black background)
gray = (arr1[:, :, 0] * 0.299 + arr1[:, :, 1] * 0.587 + arr1[:, :, 2] * 0.114)
# Normalize: black ~ 26, white ~ 255
line_intensity = np.clip((gray - 35) / 190.0, 0, 1)

# A. Transparent Drum with Golden Lines & Chim Lạc (Pure Floating Lacquer)
out_gold = np.zeros((h1, w1, 4), dtype=np.uint8)
# Gradient gold from center outward: center bright yellow-gold, outer amber
norm_dist = np.clip(dist1 / drum_radius, 0, 1)
gold_r = 254 - norm_dist * 20 # 254 -> 234
gold_g = 220 - norm_dist * 50 # 220 -> 170
gold_b = 80 - norm_dist * 50  # 80 -> 30

out_gold[:, :, 0] = gold_r.astype(np.uint8)
out_gold[:, :, 1] = gold_g.astype(np.uint8)
out_gold[:, :, 2] = gold_b.astype(np.uint8)

# Alpha is proportional to line intensity, masked by drum radius
alpha_gold = line_intensity * edge_mask * 255
out_gold[:, :, 3] = alpha_gold.astype(np.uint8)

im_gold_drum = Image.fromarray(out_gold, mode='RGBA')
gold_drum_path = os.path.join(assets_dir, 'trong_dong_gold.png')
im_gold_drum.save(gold_drum_path, 'PNG')
print(f'Saved Glowing Gold Drum: {gold_drum_path} ({im_gold_drum.size})')

# B. Solid Lacquer Drum Disc (Royal Jade Lacquer with Gold Lines)
out_lacquer = np.zeros((h1, w1, 4), dtype=np.uint8)
# Base lacquer color: deep emerald dark teal #051a11 with radial sheen
base_r = (5 + 15 * (1 - norm_dist)).astype(np.uint8)
base_g = (24 + 30 * (1 - norm_dist)).astype(np.uint8)
base_b = (17 + 20 * (1 - norm_dist)).astype(np.uint8)

# Combine: where line_intensity > 0, blend in gold
lac_r = (base_r * (1 - line_intensity) + gold_r * line_intensity).astype(np.uint8)
lac_g = (base_g * (1 - line_intensity) + gold_g * line_intensity).astype(np.uint8)
lac_b = (base_b * (1 - line_intensity) + gold_b * line_intensity).astype(np.uint8)
lac_a = (edge_mask * 255).astype(np.uint8)

out_lacquer[:, :, 0] = lac_r
out_lacquer[:, :, 1] = lac_g
out_lacquer[:, :, 2] = lac_b
out_lacquer[:, :, 3] = lac_a

im_lacquer_drum = Image.fromarray(out_lacquer, mode='RGBA')
lacquer_drum_path = os.path.join(assets_dir, 'trong_dong_lacquer.png')
im_lacquer_drum.save(lacquer_drum_path, 'PNG')
print(f'Saved Royal Lacquer Drum Disc: {lacquer_drum_path} ({im_lacquer_drum.size})')

print('All assets processed with extreme precision!')
