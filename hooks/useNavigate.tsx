import { useRouter } from "next/navigation"
import { useState } from "react"

/**
 * Function to handle navigation with a delay. Can only be used at the base of the current route.
 * @param deferBy - The delay in milliseconds before navigation
 * @returns An object containing the isNavigating state and the navigateTo function
 */
const useNavigate = (deferBy = 2000) => {
    const router = useRouter()
    const [isNavigating, setIsNavigating] = useState(false)

    const navigateTo = (href: string) => {
        setIsNavigating(true)
        // Wait for exit animation to complete before navigating
        setTimeout(() => {
            if (href.startsWith("http")) {
                window.open(href, "_blank", "noopener,noreferrer")
            } else {
                router.push(href)
            }
        }, deferBy)
    }

    return { isNavigating, navigateTo }
}

export default useNavigate
