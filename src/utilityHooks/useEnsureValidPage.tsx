import { useRouter } from "next/router"
import { useEffect } from "react"
import { useOrder } from "../hooks/Order"

export const useEnsureValidPage = () => {
  const { order } = useOrder()
  const router = useRouter()

  useEffect(() => {
    if (!order.size) {
      router.push("/steps/size")
    }
  }, [order.size, router])
}