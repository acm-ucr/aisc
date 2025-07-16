const SpotifyDescription = () => {
  return (
    <div className="max-w-6xl flex items-center gap-12">
      <div className="flex-1">
        <p className="text-3xl font-semibold mb-6 text-aisc-black font-aisc-main">
          Spotify Music Recommendation System
        </p>
        <p className="text-xl text-aisc-gray leading-relaxed font-aisc-main">
          Develop a music recommendation system that suggests tracks to users based on their listening history, favorite genres, and artist preferences. The system will utilize collaborative filtering and content-based techniques to personalize recommendations for each user.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img 
          src="/aisc_logo.webp" 
          alt="AISC Logo" 
          className="w-80 h-80 object-contain bg-aisc-lightgray rounded-2xl p-8"
        />
      </div>
    </div>
  );
};

export default SpotifyDescription;
