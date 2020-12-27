import React from "react";

export default function About(props) {
  const { bgColor, textColor, btnColor } = props.changer;

  return (
    <div className={`card container mx ${bgColor}`}>
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className={`card-title ${textColor}`}>About</h5>
        <p className={`card-text ${textColor}`}>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'lerden beri endüstri standardı sahte metinler olarak
          kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
          aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
          1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
          sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </p>
        <a href="#" className={`btn btn-primary ${btnColor}`}>
          Tüm Bilgiler İçin...
        </a>
      </div>
    </div>
  );
}
