import { useMemo } from "react"
import { IngredientData } from "../hooks/Ingredients"
import { useOrder, OrderData } from "../hooks/Order"

export const useFilteredIngredients = (
  ingredients: IngredientData[], 
  category: keyof OrderData
) => {
  const { order } = useOrder()

  const itemsToRender = useMemo(() => {
    return ingredients.map(ingredient => {
      const price = (() => {
        if (order.size === 'S') {
          return ingredient.prices.small
        } else if (order.size === 'M') {
          return ingredient.prices.medium
        } else if (order.size === 'L') {
          return ingredient.prices.large
        }

        return 0
      })()

      return {
        id: ingredient.id,
        label: ingredient.name,
        price: price,
        isSelected: order[category] === ingredient.id 
          || order[category]?.includes(ingredient.id)
      }
    })
    .filter(ingredient => !!ingredient.price)
    .sort((a, b) => a.price - b.price)
  }, [category, ingredients, order])

  return itemsToRender
}