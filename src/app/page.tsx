import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");

  // delay response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return result.json();
}

export default async function Home() {
  const recipes = await getRecipes();

  console.log("RECIPES: ", recipes);

  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <div
              style={{
                borderRadius: "7px 7px 0 0",
                backgroundImage: `url(${recipe.image})`,
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
              }}
            ></div>
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={recipe.image} />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>{recipe.description}</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant={"default"}>view recipe</Button>
              {recipe.vegan && <Badge variant={"secondary"}>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
