import React from "react";

export default function Contact(props) {
  const { bgColor, textColor, btnColor } = props.changer;

  return (
    <div className={`card container mx ${bgColor}`}>
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className={`card-title ${textColor}`}>Welcome Home</h5>
        <p className={`card-text ${textColor}`}>
          Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen
          bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin
          gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf
          dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü
          yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır
          metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında
          'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım
          aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen
          kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli
          sürümleri geliştirilmiştir.
        </p>
        <a href="#" className={`btn btn-primary ${btnColor}`}>
          Tüm Bilgiler İçin...
        </a>
      </div>
    </div>
  );
}
