import { Meal } from '@/types/Meal';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ recipe }: { recipe: Meal }) => {
  return (
    <Link href={`/recipes/${recipe.idMeal}`}>
      <div className="max-w-sm border-2 border-gray-300 cursor-pointer hover:border-black">
        <Image
          src={recipe.strMealThumb}
          width={350}
          height={250}
          alt="meal image"
        />
        <h1 className="bg-white py-4 text-gray-500 font-semibold text-2xl text-center">
          {recipe.strMeal}
        </h1>
      </div>
    </Link>
  );
};

export default Card;
