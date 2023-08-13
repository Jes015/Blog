import CommandIcon from "@/assets/images/command.svg"
import SearchIcon from "@/assets/images/search.svg"
import { CommandMenu } from "@/components/"
import { useState } from "react"
import styles from './search.module.css'
export const Search = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOnClick = () => {
    setModalOpen(!modalOpen)
  }
  return(
    <>
      {
        modalOpen &&
        <CommandMenu toggleModalStatus={handleOnClick} />
      }
      <div onClick={handleOnClick} className={styles.search}>
        <img className={styles['search__search-icon']} src={SearchIcon.src} width={16} height={16} alt="search icon" />
        <span className={styles['search__text']}>Type / to search</span>
        <img className={styles["search__command-icon"]} src={CommandIcon.src} width={23} height={23} alt="command icon" />
      </div>

    </>
  )
}
