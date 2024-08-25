export default function Location() {
  return (
    <section className="mt-20 flex flex-col gap-14">
      <h1 className="text-center text-xl font-bold xl:text-2xl">Lokasi</h1>

      <div className="flex flex-col justify-between gap-10 md:flex-row-reverse">
        <div className="flex min-h-[300px] w-full lg:w-1/2 lg:items-center lg:justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.932933086166!2d107.820232987117!3d-6.84384261264859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68da3cb89f8637%3A0x1952cf4937f17395!2sKantor%20Kepala%20Desa%20Pasirbiru!5e0!3m2!1sid!2sid!4v1722703203258!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full lg:h-[220px] xl:h-[250px] xl:w-[400px]"
          />
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <p className="text-justify sm:text-xl lg:text-lg">
            Jika dilihat menggunakan Google Maps, wilayah Desa Pasirbiru
            terletak di bagian selatan wilayah Kecamatan Rancakalong, memanjang
            dari bagian selatan wilayah kecamatan sampai ke bagian baratnya.
            Wilayahnya dilewati jalur yang menghubungkan Tanjungsari dengan
            pusat Kecamatan Rancakalong.
          </p>
        </div>
      </div>
    </section>
  );
}
