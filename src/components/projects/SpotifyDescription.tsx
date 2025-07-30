import Image from "next/image";

const SpotifyDescription = () => {
  return (
    <div className="flex w-6xl items-center gap-12">
      <div className="flex-1 flex-col">
        <p className="text-aisc-black font-aisc-main mb-6 text-3xl font-semibold">
          Spotify Music Recommendation System
        </p>
        <p className="text-aisc-gray font-aisc-main text-xl leading-relaxed">
          Develop a music recommendation system that suggests tracks to users
          based on their listening history, favorite genres, and artist
          preferences. The system will utilize collaborative filtering and
          content-based techniques to personalize recommendations for each user.
        </p>
      </div>
      <Image
        src="/aisc_logo.webp"
        alt="AISC Logo"
        width={320}
        height={320}
        className="bg-aisc-lightgray rounded-2xl object-cover p-8"
      />
    </div>
  );
};

export default SpotifyDescription;
