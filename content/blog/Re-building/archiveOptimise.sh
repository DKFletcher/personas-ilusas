mkdir masters
widths=(320 360 375 412 414 480 600 768 800 1024 1280)
for x in *.png; do 
  t=${x%.png}.png
  cp $x ./masters/$t && echo "moved $x -> $t"
    OUTPUT_PATH=./
    OUTPUT_WIDTH=1024
    INPUT_PATH=${x}
    magick mogrify -path $OUTPUT_PATH -filter Triangle -define filter:support=2 -thumbnail $OUTPUT_WIDTH -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip $INPUT_PATH
done


for x in *.jpg; do 
  t=${x%.jpg}.jpg
  cp $x ./masters/$t && echo "moved $x -> $t"
    OUTPUT_PATH=./
    OUTPUT_WIDTH=1024
    INPUT_PATH=${x}
    magick mogrify -path $OUTPUT_PATH -filter Triangle -define filter:support=2 -thumbnail $OUTPUT_WIDTH -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip $INPUT_PATH
done


for x in *.JPG; do 
  t=${x%.JPG}.jpg
  cp $x ./masters/$t && echo "moved $x -> $t"
    OUTPUT_PATH=./
    OUTPUT_WIDTH=1024
    INPUT_PATH=${x}
    magick mogrify -path $OUTPUT_PATH -filter Triangle -define filter:support=2 -thumbnail $OUTPUT_WIDTH -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip $INPUT_PATH
done