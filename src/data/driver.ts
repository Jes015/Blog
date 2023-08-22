import type { ILocalSteps } from "@/models"
import type { DriveStep } from "driver.js"

export const globalSteps: DriveStep[] = [
    {
        element: "#header__breadcrumbs",
        popover: {
            title: "Breadcrumbs",
            description:
                "Think of Breadcrumbs as your virtual trail guide. It shows you where you are on a website or app, making it a breeze to move around. It's like leaving a trail of digital breadcrumbs so you never get lost!",
            side: "bottom",
            align: "start",
        },
    },
    {
        element: "#header__search",
        popover: {
            title: "Search box",
            description:
                "This component provides you with the ability to search and access a variety of posts. You can find and explore a wide range of content efficiently and quickly.",
        },
    },
    {
        element: "#header__nav-list",
        popover: {
            title: "Navigation",
            description:
                "Use this navigation bar to smoothly navigate through our blog, including projects and more.",
        },
    },
    {
        element: "#profile__button-rssfeed",
        popover: {
            title: "RSS Feed",
            description:
                "Stay in the loop with our blog updates! Tap this button to reveal the magic of our RSS feed – your gateway to fresh and exciting content straight from the source. Get ready to have the latest articles and stories delivered right to you!",
        },
    },
]

export const localSteps: ILocalSteps[] = [
    {
        path: "/",
        steps: [
            {
                element: "#layout__post",
                popover: {
                    title: "Posts container",
                    description:
                        "This container is dedicated to displaying the most recent four uploaded posts. Its main function is to offer a concise and structured presentation of these posts for users to conveniently access.",
                },
            },
            {
                element: "#heatmap",
                popover: {
                    title: "Heat map",
                    description:
                        "Step into our time-traveling heat map! Watch as the past comes to life through a visual calendar of post publication dates. This vibrant display lets you explore the history of our blog, showcasing when each exciting piece of content was unleashed onto the digital world. Get ready to embark on a journey through time and discover the rhythm of our posts!",
                },
            },
            {
                element: "#heatmap__filters",
                popover: {
                    title: "Heat map filters",
                    description:
                        "This heatmap filter is designed to facilitate the visualization of posts based on years. With this feature, users can efficiently filter and display posts according to distinct year ranges, enabling them to gain insights into long-term trends and developments.",
                },
            },
        ],
    },
    {
        path: '/post',
        steps: [
            {
                element: "#reader",
                popover: {
                    title: "Reader",
                    description: "This component is designed to display the entire content of posts."
                }
            },
            {
                element: "#reader__copy",
                popover: {
                    title: "Copy",
                    description: "This button allows to copy the post link with ease."
                }
            }
        ]
    }
]