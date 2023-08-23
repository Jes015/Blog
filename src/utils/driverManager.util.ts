import "@/components/Driver/Driver.css"
import { globalConfig } from "@/config"
import type { ILocalSteps } from "@/models/"
import { getFromSessionStorage, setToSessionStorage } from "@/utils/"
import { driver, type DriveStep, type Driver } from "driver.js"
import "driver.js/dist/driver.css"

export class DriverManager {
    private driver: Driver
    private globalSteps: DriveStep[] // for steps that are in all pages
    private localSteps: ILocalSteps[] // for steps for each page
    private wasGlobalStepsShowed: string | null

    constructor(globalSteps: DriveStep[], localSteps: ILocalSteps[]) {
        this.globalSteps = globalSteps
        this.localSteps = localSteps
        this.wasGlobalStepsShowed = getFromSessionStorage(globalConfig.localStorage.wasGlobalStepsShowed)
        this.driver = driver(
            {
                showProgress: true,
                animate: true,
                showButtons: ["next", "previous"],
                popoverClass: "driverjs-theme",
            })
    }

    private determinateStepsForPage() {
        if (this.driver == null) {
            console.error('DriverManager found an error: driver is not defined')
            return
        }

        let stepsToShow = this.globalSteps
        const path = window.location.pathname

        const foundLocalSteps = this.localSteps.find(
            (localStep) => localStep.path.includes(path as string)
        )?.steps

        if (foundLocalSteps != null) {
            if (this.wasGlobalStepsShowed === null) {
                stepsToShow = [...stepsToShow, ...foundLocalSteps]
                setToSessionStorage(globalConfig.localStorage.wasGlobalStepsShowed, 'yes')
            } else {
                stepsToShow = foundLocalSteps
            }
        }

        this.driver.setSteps(stepsToShow)
    }

    public async showSteps() {
        if (this.driver == null) {
            console.error('DriverManager found an error: driver is not defined')
            return
        }
        this.determinateStepsForPage()
        this.driver.drive()
    }
}