import Image from "next/image";

export default function Profile() {
  return (
    <section className="mt-20 flex flex-col gap-14">
      <h1 className="text-center text-xl font-bold xl:text-2xl">
        Desa Pasir Biru
      </h1>

      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex w-full md:w-1/2 xl:items-center xl:justify-center">
          <Image
            src={"/pasir-biru/kantor-desa-pasir-biru.webp"}
            alt="kantor desa pasir biru"
            width={500}
            height={500}
            className="h-full w-full object-cover xl:h-[250px] xl:w-[400px]"
          />
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2">
          <p className="text-justify sm:text-xl md:text-base lg:text-lg">
            Desa Pasirbiru merupakan sebuah desa yang berada di wilayah
            Kecamatan Rancakalong Kabupaten Sumedang. Lokasinya berada di bagian
            selatan wilayah Kecamatan Rancakalong dan diapit oleh wilayah
            Kecamatan Tanjungsari di bagian barat dan Kecamatan Pamulihan di
            bagian tenggaranya. Jika dilihat dari pusat Kecamatan Rancakalong
            posisinya berada di bagian selatan dengan jarak sekitar satu
            kilometer.
          </p>
        </div>
      </div>
    </section>
  );
}
