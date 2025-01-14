import { FC } from "react"
import { demos } from "@/app/demos/list"
import ClientLayout from "@/app/demos/[demo]/ClientLayout"
import { Metadata } from "next"

type Props = {
    params: Promise<{ demo: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const demoId = (await params).demo
    const demo = demos.find(
        (demo) => demo.title === demoId.split("-").join(" "),
    )
    const title = demo?.title || "Home"
    return {
        title: `${title} | gibson murray`,
    }
}

const DemoPage: FC<Props> = async ({ params }) => {
    const demoId = (await params).demo
    const demo = demos.find((demo) => demo.href.includes(demoId))
    return (
        <div className="relative flex min-h-svh w-screen flex-col items-center justify-center">
            <ClientLayout>{demo?.component}</ClientLayout>
        </div>
    )
}

export default DemoPage
