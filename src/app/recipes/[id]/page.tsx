import { Meal } from '@/types/Meal';
import Image from 'next/image';

async function getData(id: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const data = res.json();
  return data;
}

const RecipePage = async ({ params: { id } }: { params: { id: string } }) => {
  const recipe = await getData(id);
  return (
    <div className="container mx-auto my-20">
      <div className="flex border-2 border-gray-300 cursor-pointer p-4">
        <div className="relative w-[50%] h-[500px] mr-8">
          <Image
            src={recipe.meals[0]?.strMealThumb}
            layout="fill"
            objectFit="cover"
            alt="meal image"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="py-4 text-gray-500 font-semibold text-2xl text-center mb-4">
            {recipe.meals[0].strMeal}
          </h1>
        </div>
        {/* Ingredients Card */}
        <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
            const ingredient = recipe?.meals[0][`strIngredient${index}`];
            const measurement = recipe?.meals[0][`strMeasure${index}`];

            if (ingredient && measurement) {
              return (
                <div key={index} className="mb-2">
                  <span className="font-semibold">{ingredient}:</span>{' '}
                  {measurement}
                </div>
              );
            }

            return null;
          })}

          {/* Steps Card */}
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Steps:</h2>
            <ol className="list-decimal pl-4">
              {recipe?.meals[0]?.strInstructions
                .split('\r\n')
                .map((step: number, index: number) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
          </div>

          {/* YouTube Video */}
          {recipe?.meals[0]?.strYoutube && (
            <div className="mb-4">
              <iframe
                width="100%"
                height="315"
                src={recipe?.meals[0]?.strYoutube.replace('watch?v=', 'embed/')}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
