import type { ToolContent } from './index';

export const imageMetadataViewerContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Image Metadata Viewer: Explore EXIF, IPTC, XMP, and File Properties</h2>
        <p>
          Every digital image carries far more information than the pixels you see. Embedded within the
          file are metadata records describing how, when, and where the image was captured; what camera
          and lens were used; copyright and authorship information; GPS coordinates; color space; and
          much more. Our Image Metadata Viewer extracts and displays all available metadata from JPEG,
          PNG, WebP, TIFF, RAW, and other image formats "” instantly, without uploading your file to any
          server.
        </p>
        <p>
          Understanding image metadata matters in multiple professional contexts: photographers need EXIF
          data for legal and portfolio purposes; forensic investigators use metadata for provenance
          verification; web developers need to check metadata before publishing images to avoid privacy
          leaks; SEO specialists check alt text and color profiles; content moderators verify claimed
          timestamps; and journalists verify image authenticity.
        </p>

        <h2>What is EXIF Data?</h2>
        <p>
          EXIF "” Exchangeable Image File Format "” is the most common image metadata standard. Developed
          by the Japan Electronic Industries Development Association (JEIDA) in 1995 and now maintained
          by JEITA, EXIF defines a set of tags embedded in JPEG and TIFF files (and supported in WebP,
          HEIF, and PNG via compatible mechanisms) that record technical parameters of the image capture.
        </p>
        <p>
          EXIF data is written by digital cameras, smartphones, and some software at the moment of image
          capture. Key EXIF tags include:
        </p>
        <h3>Camera and Capture Information</h3>
        <ul>
          <li><strong>Make and Model</strong>: the camera manufacturer and model name (e.g., "Apple", "iPhone 15 Pro")</li>
          <li><strong>DateTimeOriginal</strong>: the timestamp when the shutter was pressed, in local time</li>
          <li><strong>ExposureTime</strong>: shutter speed (e.g., 1/500 seconds)</li>
          <li><strong>FNumber</strong>: aperture as an f-stop value (e.g., f/2.8)</li>
          <li><strong>ISOSpeedRatings</strong>: ISO sensitivity (e.g., 800)</li>
          <li><strong>FocalLength</strong>: the focal length of the lens in millimeters (e.g., 50mm)</li>
          <li><strong>FocalLengthIn35mmFilm</strong>: equivalent focal length on 35mm full-frame sensor</li>
          <li><strong>Flash</strong>: whether the flash fired and its mode</li>
          <li><strong>MeteringMode</strong>: how the camera measured exposure (spot, center-weighted, evaluative)</li>
          <li><strong>WhiteBalance</strong>: auto or manual white balance setting</li>
          <li><strong>ExposureMode</strong>: manual, aperture priority, shutter priority, or program</li>
          <li><strong>ExposureBiasValue</strong>: exposure compensation applied in stops (e.g., +1.0 EV)</li>
          <li><strong>LensModel</strong>: the specific lens used (e.g., "EF 24-70mm f/2.8L II USM")</li>
          <li><strong>BodySerialNumber</strong>: camera serial number (privacy-sensitive)</li>
        </ul>
        <h3>Image Properties</h3>
        <ul>
          <li><strong>PixelXDimension / PixelYDimension</strong>: image width and height in pixels</li>
          <li><strong>XResolution / YResolution</strong>: pixel density (dpi or ppi), e.g., 72 PPI for screen, 300 DPI for print</li>
          <li><strong>Orientation</strong>: rotation applied by the camera (1=normal, 3=180°, 6=90° CW, 8=90° CCW)</li>
          <li><strong>ColorSpace</strong>: sRGB, Adobe RGB, or uncalibrated</li>
          <li><strong>BitsPerSample</strong>: bit depth per channel (8, 16, etc.)</li>
          <li><strong>Compression</strong>: compression type (JPEG, uncompressed)</li>
        </ul>

        <h2>GPS Metadata: Location Privacy Implications</h2>
        <p>
          Modern smartphones embed GPS coordinates in image EXIF data by default. The GPS tags include:
        </p>
        <ul>
          <li><strong>GPSLatitude / GPSLatitudeRef</strong>: latitude in degrees, minutes, seconds and N/S hemisphere</li>
          <li><strong>GPSLongitude / GPSLongitudeRef</strong>: longitude and E/W hemisphere</li>
          <li><strong>GPSAltitude / GPSAltitudeRef</strong>: altitude in meters above/below sea level</li>
          <li><strong>GPSTimeStamp / GPSDateStamp</strong>: GPS timestamp (UTC)</li>
          <li><strong>GPSSpeed</strong>: speed of the device at capture time (from GPS)</li>
          <li><strong>GPSImgDirection</strong>: compass direction the camera was pointing</li>
        </ul>
        <p>
          A GPS-embedded photograph reveals exactly where the user was at the moment of capture. This is
          a significant privacy risk when sharing images publicly. Notable incidents include journalists
          inadvertently revealing source locations, domestic abuse victims being tracked through shared
          photos, and celebrities having home addresses discovered via social media photos.
        </p>
        <p>
          Most social networks (Facebook, Instagram, Twitter/X) automatically strip GPS metadata from
          uploaded images, but not all services do. Before sharing images publicly, verify GPS data is
          removed using a metadata viewer or stripped using a metadata removal tool. On iOS: Settings →
          Privacy → Location Services → Camera → "Never" prevents GPS embedding. On Android, camera
          settings include a "Location tags" or "Save location" toggle.
        </p>

        <h2>IPTC Metadata: Professional Image Cataloging</h2>
        <p>
          IPTC (International Press Telecommunications Council) metadata standards were developed for
          photojournalism workflows in the 1990s and remain the standard for professional image
          management. IPTC fields include:
        </p>
        <ul>
          <li><strong>Caption/Description</strong>: detailed description of the image content</li>
          <li><strong>Headline</strong>: short title for the image</li>
          <li><strong>Keywords</strong>: searchable keyword tags (comma-separated list)</li>
          <li><strong>Creator/Byline</strong>: photographer's name</li>
          <li><strong>Copyright Notice</strong>: copyright string (e.g., "© 2025 Jane Smith")</li>
          <li><strong>Credit Line</strong>: how the image should be credited when published</li>
          <li><strong>Source</strong>: originating organization or news agency</li>
          <li><strong>City / State / Country</strong>: location where the image was captured</li>
          <li><strong>Date Created</strong>: date the image was taken</li>
          <li><strong>Category</strong>: editorial category (arts, news, sports, etc.)</li>
          <li><strong>Rights and Permissions</strong>: usage rights information</li>
        </ul>
        <p>
          IPTC metadata is typically embedded by photo editing software (Lightroom, Photoshop, Capture
          One) as part of the export process for stock photography, news agencies, and editorial workflows.
          The IPTC Core and IPTC Extension schemas are the professional standards for embedding descriptive
          metadata in images.
        </p>

        <h2>XMP Metadata: Adobe's Extensible Standard</h2>
        <p>
          XMP (Extensible Metadata Platform) was introduced by Adobe in 2001 and became an ISO standard
          (ISO 16684-1) in 2012. XMP uses RDF/XML to store structured metadata in a wide range of file
          formats including JPEG, PNG, PDF, SVG, audio, and video. It is designed to be extensible "”
          any application can define custom XMP schemas.
        </p>
        <p>
          XMP is the primary metadata format used by Adobe applications. Lightroom Classic stores all
          catalog data (ratings, labels, adjustments, collections) as XMP sidecar files (.xmp) or
          embedded XMP in JPEG and TIFF files. Key XMP namespaces include:
        </p>
        <ul>
          <li><strong>dc: (Dublin Core)</strong>: title, description, subject, creator, rights, date</li>
          <li><strong>xmp:</strong>: creation date, modification date, creator tool, rating</li>
          <li><strong>xmpRights:</strong>: rights management "” usage terms, web statement URL</li>
          <li><strong>photoshop:</strong>: headline, instructions, credit, source, city, country</li>
          <li><strong>Iptc4xmpCore:</strong>: IPTC core metadata in XMP format</li>
          <li><strong>exif:</strong>: EXIF technical data in XMP format</li>
          <li><strong>lr: (Lightroom)</strong>: Lightroom-specific fields including hierarchical keywords</li>
          <li><strong>crs: (Camera Raw)</strong>: Adobe Camera Raw/Lightroom development settings</li>
        </ul>

        <h2>ICC Color Profiles</h2>
        <p>
          ICC (International Color Consortium) profiles embedded in images define the color space of
          the image "” the gamut and tone response that maps numeric pixel values to absolute colors.
          Common ICC profiles:
        </p>
        <ul>
          <li><strong>sRGB</strong>: the standard web color space. All consumer displays and browsers use sRGB by default. Images without an embedded profile are assumed to be sRGB.</li>
          <li><strong>Adobe RGB (1998)</strong>: wider gamut than sRGB, covering more greens and cyans. Used in professional photography and prepress workflows.</li>
          <li><strong>Display P3</strong>: the color space used by Apple's Retina displays, iPhones, and many modern monitors. Wider gamut than sRGB (25% larger).</li>
          <li><strong>ProPhoto RGB</strong>: very wide gamut used in Lightroom's internal processing. Images should be converted to sRGB or Display P3 before web publishing.</li>
          <li><strong>CMYK</strong>: print color space. Web browsers do not natively support CMYK JPEG images "” they will be incorrectly rendered.</li>
        </ul>
        <p>
          Checking an image's color profile before publishing is important: a JPEG with an Adobe RGB
          profile will look desaturated on screens that don't perform color management (many browsers
          do handle this, but not all). Publishing a CMYK JPEG to the web will produce unexpected colors.
        </p>

        <h2>PNG Metadata Chunks</h2>
        <p>
          PNG stores metadata in "chunks" "” named data blocks within the file. Key metadata chunks:
        </p>
        <ul>
          <li><strong>tEXt/zTXt/iTXt</strong>: text metadata. tEXt and zTXt store Latin-1 text; iTXt stores UTF-8 Unicode. Fields like Author, Description, Creation Time, Software are commonly embedded here.</li>
          <li><strong>gAMA</strong>: gamma correction value.</li>
          <li><strong>cHRM</strong>: chromaticity coordinates defining the color space.</li>
          <li><strong>iCCP</strong>: embedded ICC color profile.</li>
          <li><strong>pHYs</strong>: physical pixel dimensions "” pixels per unit (DPI/PPI).</li>
          <li><strong>tIME</strong>: last modification time.</li>
          <li><strong>eXIf</strong>: EXIF data embedded in PNG (standardized in PNG 1.6).</li>
          <li><strong>acTL/fcTL/fdAT</strong>: APNG (animated PNG) control chunks.</li>
        </ul>

        <h2>Reading Image Metadata Programmatically</h2>
        <h3>JavaScript / Node.js with ExifReader</h3>
        <pre><code>{"import ExifReader from 'exifreader';\nimport fs from 'fs';\n\nconst tags = ExifReader.load(fs.readFileSync('photo.jpg'));\nconsole.log(tags['DateTimeOriginal']?.description);\nconsole.log(tags['GPSLatitude']?.description);\nconsole.log(tags['Make']?.value);"}</code></pre>
        <h3>Browser-Side with ExifReader (no upload needed)</h3>
        <pre><code>{"import ExifReader from 'exifreader';\n\nfileInput.addEventListener('change', async (e) => {\n  const file = e.target.files[0];\n  const arrayBuffer = await file.arrayBuffer();\n  const tags = ExifReader.load(arrayBuffer);\n  console.log(tags['GPSLatitude']?.description);\n});"}</code></pre>
        <h3>Python with Pillow and piexif</h3>
        <pre><code>{"from PIL import Image\nimport piexif\n\nimg = Image.open('photo.jpg')\nexif_data = piexif.load(img.info.get('exif', b''))\n\nfor ifd in ['0th', 'Exif', 'GPS', '1st']:\n    for tag, value in exif_data.get(ifd, {}).items():\n        tag_name = piexif.TAGS[ifd].get(tag, {}).get('name', tag)\n        print(f'{tag_name}: {value}')"}</code></pre>
        <h3>ExifTool (Command Line)</h3>
        <pre><code>{'# View all metadata\nexiftool photo.jpg\n\n# View only GPS data\nexiftool -GPS* photo.jpg\n\n# Export as JSON\nexiftool -json photo.jpg\n\n# Strip all metadata\nexiftool -all= photo.jpg\n\n# Copy metadata from one file to another\nexiftool -tagsfromfile source.jpg dest.jpg'}</code></pre>
        <p>
          ExifTool, created by Phil Harvey, is the most comprehensive command-line metadata tool available.
          It supports hundreds of file formats and thousands of metadata tags, including manufacturer-specific
          MakerNote tags that other tools cannot read.
        </p>

        <h2>Stripping Metadata for Privacy</h2>
        <p>
          Before publishing images publicly, consider stripping metadata to protect privacy and reduce
          file size. Options:
        </p>
        <ul>
          <li><strong>ExifTool</strong>: <code>exiftool -all= photo.jpg</code> removes all metadata.</li>
          <li><strong>ImageMagick</strong>: <code>convert input.jpg -strip output.jpg</code></li>
          <li><strong>Squoosh / TinyPNG</strong>: most image optimization services strip metadata by default.</li>
          <li><strong>ffmpeg</strong>: <code>ffmpeg -i input.jpg -map_metadata -1 output.jpg</code></li>
          <li><strong>iOS / macOS</strong>: Finder's "Get Info" shows basic metadata; Photos app has limited metadata editing. Use Preview for basic EXIF editing.</li>
          <li><strong>Windows</strong>: right-click → Properties → Details tab → "Remove Properties and Personal Information".</li>
        </ul>
        <p>
          Note that stripping metadata completely is different from retaining only certain fields.
          ExifTool can selectively remove specific tags: <code>exiftool -GPS*= photo.jpg</code> removes
          only GPS tags while preserving other EXIF data.
        </p>

        <h2>Metadata Forensics and Image Authenticity</h2>
        <p>
          Image metadata is used in digital forensics to verify image authenticity and provenance.
          Key forensic applications:
        </p>
        <ul>
          <li>
            <strong>Timestamp verification</strong>: <code>DateTimeOriginal</code> records the camera's
            time at capture. Cross-referencing with GPS timestamps (which are UTC and sourced from
            satellites) can reveal timezone discrepancies that indicate metadata tampering.
          </li>
          <li>
            <strong>Device fingerprinting</strong>: camera serial numbers (BodySerialNumber) and
            lens models (LensModel) can identify the specific device that captured an image.
          </li>
          <li>
            <strong>Software history</strong>: the Software and History XMP tags record which applications
            have processed the image. A "taken with iPhone" photo that shows Photoshop in the history
            may have been edited.
          </li>
          <li>
            <strong>Thumbnail inconsistency</strong>: JPEG files contain an embedded thumbnail. If the
            thumbnail differs from the full image, it may indicate the main image was swapped while
            the original thumbnail was retained "” a common indicator of manipulation.
          </li>
        </ul>
        <p>
          Metadata alone cannot definitively prove or disprove image authenticity "” metadata can be
          easily fabricated or stripped. But inconsistencies in metadata, combined with pixel-level
          analysis, provide important evidence in authentication workflows.
        </p>

        <h2>File Size and Metadata Bloat</h2>
        <p>
          Metadata can significantly increase image file sizes. A JPEG exported from Lightroom with full
          metadata (EXIF, IPTC, XMP, Lightroom history) may have 100-200KB of metadata embedded, a
          significant overhead for a small image. For web publishing:
        </p>
        <ul>
          <li>Strip all metadata to minimize file size (most web tools do this automatically).</li>
          <li>Retain only copyright and creator fields if attribution is required.</li>
          <li>ICC profiles are worth keeping "” they are typically small (4-8KB for sRGB) and prevent color shift on color-managed displays.</li>
          <li>Lightroom's "Minimize Embedded Metadata" export option strips all non-essential tags.</li>
        </ul>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is image metadata?',
      answer:
        'Image metadata is information embedded within an image file beyond the pixel data. It describes how, when, and where the image was captured; what equipment was used; copyright information; GPS location; color space; and much more. The main metadata standards are EXIF (camera technical data), IPTC (editorial cataloging), XMP (Adobe&#39;s extensible standard), and ICC profiles (color space definition).',
    },
    {
      category: 'EXIF',
      question: 'What is EXIF data and what information does it contain?',
      answer:
        'EXIF (Exchangeable Image File Format) is metadata written by cameras and smartphones at the moment of capture. Key fields: camera make and model, capture date/time, exposure settings (shutter speed, aperture, ISO), focal length, flash usage, GPS coordinates, image dimensions, orientation, color space, and often lens model and camera serial number.',
    },
    {
      category: 'EXIF',
      question: 'What does the Orientation EXIF tag do?',
      answer:
        'The Orientation tag records the camera rotation at capture time (1=normal, 3=180°, 6=90° CW, 8=90° CCW). This allows image viewers to display the image correctly without physically rotating the pixels "” the file stores the original captured orientation and the software applies rotation on display. When images are opened in software that ignores Orientation, photos taken in portrait mode may appear rotated.',
    },
    {
      category: 'GPS',
      question: 'Do photos taken on my phone contain my location?',
      answer:
        'Yes, if location permissions are granted to the camera app. Smartphones embed GPS latitude, longitude, altitude, and timestamp in EXIF data by default when location access is enabled. This means any photo you share may contain the exact coordinates of where you were when you took it "” a significant privacy risk. To disable: on iOS, Settings → Privacy → Location Services → Camera → Never. On Android, open the camera app and disable "Save location" in settings.',
    },
    {
      category: 'GPS',
      question: 'Do social media platforms strip GPS metadata from uploaded photos?',
      answer:
        'Major platforms including Facebook, Instagram, Twitter/X, and TikTok automatically strip EXIF metadata (including GPS) from uploaded photos before serving them to viewers. However, some platforms, direct file sharing services (Dropbox, Google Drive shared links), email attachments, and forums do not strip metadata. Always verify metadata is removed before sharing images where privacy matters.',
    },
    {
      category: 'Privacy',
      question: 'How do I remove GPS and other metadata from photos?',
      answer:
        'ExifTool command line: exiftool -GPS*= photo.jpg (removes only GPS) or exiftool -all= photo.jpg (removes all). Windows: right-click → Properties → Details → "Remove Properties and Personal Information". macOS: Preview or specialized tools. Online: many image optimization services strip metadata by default. Note: some metadata like color profiles (ICC) should be kept to prevent color shifts.',
    },
    {
      category: 'IPTC',
      question: 'What is IPTC metadata and who uses it?',
      answer:
        'IPTC (International Press Telecommunications Council) metadata was designed for photojournalism workflows. It stores editorial information: caption, headline, keywords, photographer byline, copyright notice, credit line, source, and location fields. Photographers, stock agencies, and news organizations use IPTC for image cataloging and copyright management. Lightroom, Photoshop, and Capture One all support embedding IPTC metadata during export.',
    },
    {
      category: 'XMP',
      question: 'What is XMP metadata?',
      answer:
        'XMP (Extensible Metadata Platform) is Adobe&#39;s open metadata standard based on RDF/XML. It is embedded in image files or stored in separate .xmp sidecar files. Adobe applications use XMP extensively: Lightroom stores all editing adjustments, ratings, and keywords as XMP. XMP supports namespaces for different metadata schemas (EXIF, IPTC, Dublin Core) and can be extended with custom schemas by any application.',
    },
    {
      category: 'Color',
      question: 'What is an ICC color profile in an image and why does it matter?',
      answer:
        'An ICC color profile defines the color space of the image "” it maps the image&#39;s numeric pixel values to absolute colors. Common profiles: sRGB (standard web), Adobe RGB (professional photography, wider gamut), Display P3 (modern Apple devices, 25% wider than sRGB). Without the correct color profile, images may appear too saturated, washed out, or slightly off-color. For web publishing, images should be in sRGB to ensure consistent appearance across browsers and devices.',
    },
    {
      category: 'Color',
      question: 'What happens if I publish a CMYK image on the web?',
      answer:
        'CMYK JPEGs will display with incorrect colors in most browsers. Browsers are designed for RGB color spaces; CMYK images bypass color management and may appear dark, desaturated, or have significantly shifted colors. Always convert images to sRGB (or Display P3 for wide-gamut displays) before web publishing. Check the color space in your metadata viewer before uploading.',
    },
    {
      category: 'PNG',
      question: 'What metadata can PNG files contain?',
      answer:
        'PNG stores metadata in chunks. Text chunks (tEXt, iTXt) store fields like Author, Description, Creation Time, and Software. The pHYs chunk stores DPI/PPI. The iCCP chunk embeds an ICC color profile. The gAMA and cHRM chunks define gamma and chromaticity. Since PNG 1.6, the eXIf chunk can store EXIF data. APNG (animated PNG) includes animation control chunks. PNG metadata is generally less standardized than JPEG EXIF.',
    },
    {
      category: 'Forensics',
      question: 'Can image metadata be used to verify if a photo is authentic?',
      answer:
        'Metadata provides evidence but cannot definitively prove authenticity because it can be fabricated or stripped. Forensic indicators include: DateTimeOriginal vs GPS timestamp discrepancies (GPS is UTC from satellites, camera time is local "” timezone mismatch indicates tampering); thumbnail vs main image inconsistency (old thumbnail with new image); processing software history showing manipulation; missing metadata fields that should be present for the claimed camera model.',
    },
    {
      category: 'Forensics',
      question: 'What is a JPEG thumbnail inconsistency and why does it matter forensically?',
      answer:
        'JPEG files contain a small embedded thumbnail (typically 160×120 pixels) in addition to the main image. This thumbnail is generated by the camera when the photo is taken. If someone replaces the main image data while keeping the original file header, the thumbnail may show the original image while the main image shows different content. This inconsistency is a strong indicator of image manipulation and is a standard check in digital forensics.',
    },
    {
      category: 'Tools',
      question: 'What is ExifTool and how do I use it?',
      answer:
        'ExifTool by Phil Harvey is the most comprehensive metadata tool available, supporting hundreds of file formats and thousands of tags including manufacturer-specific MakerNote tags. Install via brew install exiftool (Mac), apt install exiftool (Linux), or the Windows installer. Basic commands: exiftool photo.jpg (view all), exiftool -GPS* photo.jpg (view GPS only), exiftool -all= photo.jpg (strip all metadata), exiftool -json photo.jpg (JSON output), exiftool -r directory/ (process recursively).',
    },
    {
      category: 'Programming',
      question: 'How do I read EXIF data in JavaScript without uploading to a server?',
      answer:
        'Use the exifreader or exifr library in the browser. Load the file as an ArrayBuffer via FileReader, then parse it: import ExifReader from "exifreader"; const tags = ExifReader.load(arrayBuffer). This runs entirely in the browser "” the image never leaves the user&#39;s device. Supports JPEG, PNG (with eXIf chunks), WebP, TIFF, and HEIC. Access tags like tags["GPSLatitude"].description for formatted values.',
    },
    {
      category: 'Programming',
      question: 'How do I strip metadata from images in Node.js?',
      answer:
        'With Sharp: sharp("input.jpg").withMetadata(false).toFile("output.jpg") strips all metadata. With ExifTool.js: run exiftool -all= file.jpg via child_process. With Jimp: Jimp reads and writes images without preserving metadata by default. For batch processing in the file system, ExifTool CLI with recursion (-r) is the most practical approach.',
    },
    {
      category: 'Photography',
      question: 'How do I add copyright metadata to all my photos?',
      answer:
        'In Lightroom: Library module → metadata presets → create a preset with Copyright Notice and Creator fields → apply to all images. In Photoshop: File → File Info → metadata panel. With ExifTool: exiftool -copyright="© 2025 Your Name" -artist="Your Name" *.jpg. In Capture One: metadata panel or batch apply from metadata template. For new captures, set copyright in your camera&#39;s firmware if supported (most DSLRs and mirrorless cameras support this).',
    },
    {
      category: 'Photography',
      question: 'What EXIF data should I keep when sharing photos online?',
      answer:
        'For professional or portfolio sharing: keep copyright notice, creator name, and description/caption for attribution and discoverability. Optionally keep camera/lens data if you want to share technical details. Remove: GPS coordinates (privacy), camera serial number (security), full capture history (size reduction). For web publishing: keep the ICC color profile (sRGB preferred) to ensure accurate color rendering. Use Lightroom&#39;s "Minimize Embedded Metadata" export option for a sensible default.',
    },
    {
      category: 'SEO',
      question: 'Does image metadata affect SEO?',
      answer:
        'EXIF data is not directly used by Google for ranking. What matters for image SEO: alt text on the HTML img element (most important), descriptive file names, structured data (ImageObject schema), and page context. However, IPTC caption and keyword fields may be indexed by some image search engines and stock photo platforms. Google Images may use filename and surrounding text more than embedded metadata for indexing and categorization.',
    },
    {
      category: 'File Size',
      question: 'How much file size does metadata add to images?',
      answer:
        'Basic EXIF data adds 2-10KB to a JPEG. Full metadata with IPTC, XMP, edit history, keywords, and color profile can add 50-200KB. For a 100KB thumbnail, this is a 50-200% size increase. Stripping all metadata before web publishing reduces file size and improves load time. Most image optimization pipelines (Squoosh, Sharp, TinyPNG, ImageMagick -strip) strip metadata as part of their processing. ICC profiles are typically 4-8KB and worth keeping.',
    },
    {
      category: 'Formats',
      question: 'Which image formats support EXIF metadata?',
      answer:
        'EXIF is natively supported in: JPEG/JFIF (the original format), TIFF, WebP, HEIC/HEIF, and AVIF. PNG supports EXIF via the eXIf chunk (PNG 1.6+, supported since ~2019). RAW formats (CR2, NEF, ARW, RAF, etc.) all embed EXIF plus manufacturer-specific MakerNote data. GIF has no standard metadata support. SVG embeds XMP metadata as inline XML.',
    },
    {
      category: 'Privacy',
      question: 'How can law enforcement use metadata from my photos?',
      answer:
        'In legal proceedings, digital forensics analysts can subpoena or obtain images and extract metadata to establish: the time and place of capture (GPS + timestamp), the device used (make, model, serial number), editing history (XMP history stack), and chain of custody (modification timestamps). Courts in many jurisdictions accept EXIF data as digital evidence. This is why metadata stripping is important for privacy-conscious users and sensitive contexts.',
    },
    {
      category: 'HEIC',
      question: 'Does HEIC format support EXIF metadata?',
      answer:
        'Yes. HEIC (High Efficiency Image Container, used by iPhones since iOS 11) is based on HEIF and fully supports EXIF, IPTC, and XMP metadata. iPhone photos in HEIC format contain the same GPS, camera settings, and color profile data as JPEG equivalents. ExifTool can read HEIC metadata, and the exifreader JavaScript library supports HEIC.',
    },
    {
      category: 'AI',
      question: 'Can AI image generators embed fake EXIF data?',
      answer:
        'By default, AI-generated images from tools like DALL-E, Midjourney, and Stable Diffusion contain no EXIF camera data "” they are generated digitally, not captured by a camera. Some generators embed generation parameters (prompt, seed, model) in XMP metadata. Metadata can be manually added to images using ExifTool or Photoshop, so the absence or presence of camera EXIF data alone is not proof of AI generation. More reliable AI detection uses pixel-level statistical analysis rather than metadata.',
    },
  ],
};
