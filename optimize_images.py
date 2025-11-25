import os
from PIL import Image

def optimize_image(input_path, output_path, max_width=1920):
    try:
        if not os.path.exists(input_path):
            print(f"Skipping {input_path}: File not found")
            return

        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g. for PNGs with transparency if we wanted to drop alpha, but WebP supports alpha)
            # WebP supports RGBA, so we can keep it.
            
            # Resize if too big
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {input_path} to {max_width}x{new_height}")
            
            # Save as WebP
            img.save(output_path, 'WEBP', quality=80)
            
            old_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            savings = (old_size - new_size) / old_size * 100
            
            print(f"Converted {input_path} -> {output_path}")
            print(f"Size: {old_size/1024:.2f}KB -> {new_size/1024:.2f}KB ({savings:.1f}% saved)")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def main():
    base_dir = '/home/jaidi/Publico/mo portfolio/Archipielago-digital/img'
    
    # Images to process
    images = [
        ('pergamino_fondo.png', 'pergamino_fondo.webp'),
        ('foto.png', 'foto.webp')
    ]
    
    for input_name, output_name in images:
        input_path = os.path.join(base_dir, input_name)
        output_path = os.path.join(base_dir, output_name)
        optimize_image(input_path, output_path)

if __name__ == '__main__':
    main()
