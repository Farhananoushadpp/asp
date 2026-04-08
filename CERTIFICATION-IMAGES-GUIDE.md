# Certification Images Upload Guide

## Overview
Your certifications page now includes an image gallery section where you can display your actual certification documents. This guide will help you upload and organize your certification images.

## Image Upload Instructions

### 1. Create Certifications Folder
Create a new folder in your public directory:
```
public/
└── certifications/
    ├── iso-9001-certificate.jpg
    ├── solas-compliance-certificate.jpg
    ├── imo-certification.jpg
    ├── dnv-approval.jpg
    ├── abs-certificate.jpg
    ├── lloyds-register-certificate.jpg
    ├── ce-marking-certificate.jpg
    ├── api-certificate.jpg
    └── placeholder-certificate.jpg
```

### 2. Image Requirements
- **Format**: JPG, JPEG, or PNG
- **Size**: 800x600 pixels minimum (recommended 1200x900)
- **File Size**: Under 2MB per image
- **Quality**: High resolution, clear and readable text
- **Orientation**: Landscape (horizontal) recommended

### 3. Image Naming Convention
Use these exact filenames for your certification images:

| Certification | Required Filename |
|--------------|-------------------|
| ISO 9001:2015 | `iso-9001-certificate.jpg` |
| SOLAS Compliance | `solas-compliance-certificate.jpg` |
| IMO Certification | `imo-certification.jpg` |
| DNV Approval | `dnv-approval.jpg` |
| ABS Certificate | `abs-certificate.jpg` |
| Lloyd's Register | `lloyds-register-certificate.jpg` |
| CE Marking | `ce-marking-certificate.jpg` |
| API Certificate | `api-certificate.jpg` |

### 4. Placeholder Image
Create a placeholder image named `placeholder-certificate.jpg` for any missing certifications. This will be displayed automatically if a specific certificate image is not found.

## Features Implemented

### Image Gallery Features
- **Hover Effects**: Images scale and show overlay on hover
- **View Full Certificate**: Click to open full-size image in new tab
- **Responsive Design**: Adapts to all screen sizes
- **Fallback System**: Shows placeholder if image is missing
- **Status Indicators**: Shows active/expired/pending status
- **Valid Until Dates**: Displays certificate validity period

### Card Information
Each certification card includes:
- **Certificate Image**: Your actual certificate document
- **Title**: Certification name
- **Description**: Brief explanation of the certification
- **Valid Until**: Expiry date (you can update this in the code)
- **Status**: Active/Expired/Pending indicator

## Updating Certificate Information

### To Change Validity Dates
Edit the certification cards in `src/pages/Certifications.jsx`:

```javascript
<div className="certification-meta">
  <span className="certification-date">Valid until: 2025</span> // Update this year
  <span className="certification-status active">Active</span>  // Change status if needed
</div>
```

### To Update Status
Change the status class:
- `active` - Current and valid
- `expired` - Past expiry date
- `pending` - In process

### To Add New Certifications
1. Add the image to `public/certifications/`
2. Copy an existing certification card structure
3. Update the image src, title, and information
4. Add corresponding CSS if needed

## Image Optimization Tips

### Before Uploading
1. **Compress images** to reduce file size while maintaining quality
2. **Crop unnecessary areas** to focus on the certificate
3. **Ensure text is readable** at smaller sizes
4. **Use consistent orientation** (landscape recommended)

### Recommended Tools
- **Compression**: TinyPNG, ImageOptim
- **Editing**: Photoshop, GIMP, Canva
- **Resizing**: Online image resizers

## Testing

### After Upload
1. **Check all images load correctly**
2. **Test hover effects and overlays**
3. **Verify "View Full Certificate" buttons work**
4. **Test on mobile devices**
5. **Check placeholder fallback for missing images**

### Common Issues
- **Images not loading**: Check file paths and names
- **Images too large**: Compress before uploading
- **Text not readable**: Use higher resolution images
- **Mobile display issues**: Check responsive design

## Security Considerations

### Protecting Sensitive Information
- **Redact sensitive data** if necessary (personal info, signatures)
- **Use watermarks** if concerned about unauthorized use
- **Consider access restrictions** for sensitive certificates
- **Regular updates** when certificates expire

## Maintenance

### Regular Tasks
- **Update validity dates** as certificates renew
- **Replace expired certificates** with new versions
- **Add new certifications** as they're obtained
- **Remove outdated certifications** if no longer relevant

### Annual Review
- Check all certificate expiry dates
- Update status indicators
- Verify all images are still accessible
- Test all functionality

---

**Upload your certification images to the `public/certifications/` folder using the exact filenames specified above. The gallery will automatically display them with professional styling and interactive features.**
