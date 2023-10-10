const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData
  ]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white w-[800px] h-56 flex flex-col justify-center items-center rounded-md">
        <div className="text-blue-800 font-bold text-xl">
          PERSONAL INFO: <span className="text-black">{params.name}</span>
        </div>
        <div className="text-black text-xl">Age: {age?.age}</div>
        <div className="text-black text-xl">Gender: {gender?.gender}</div>
        <div className="text-black text-xl">
          Country: {country?.country[0]?.country_id}
        </div>
      </div>
    </div>
  );
}
