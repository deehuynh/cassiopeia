import Image from "next/image"

export default function Gallery (props) {
  const addedClass = props.addedClass ? ' ' + props.addedClass : ''

  return (
    <div className={'gallery' + addedClass}>
      <ImageGroup order='1'>
        <GalleryImage
          src="/209579038_10158403515473277_8242365296733414865_n.jpg_ciobfk.jpg"
        />

        <ImageGroup order="1-1">
          <GalleryImage
            src="/120344771_10157824946873277_470194270377792085_n.jpg_apstt8.jpg"
            objectFit="cover"
          />

          <GalleryImage
            src="/253411461_10158621757453277_1867414621911677096_n.jpg_sr0t7j.jpg"
          />
        </ImageGroup>
      </ImageGroup>

      <ImageGroup order='2'>
        <GalleryImage
          src="/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg"
        />

        <GalleryImage
          src="/233204646_10158472555758277_5728865856444065244_n.jpg_jrgmkv.jpg"
          objectFit="cover"
        />
      </ImageGroup>
    </div>
  )
}

// the children components of the gallery components
function ImageGroup ({children, order = ''}) {
  return (
    <div className={"gallery__group" + order}>
      {children}
    </div>
  )
}

function GalleryImage ({src, objectFit = "fill"}) {
  return (
    <div className="gallery__image">
      <Image
        src={src}
        width={1000}
        height={1000}
        objectFit={objectFit}
        alt="gallery"
      />
    </div>
  )
}