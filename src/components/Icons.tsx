import type { TIcon } from '@/models'

export const SearchIcon: TIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

export const NotFoundIcon: TIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M7 8.5l3 3"></path>
      <path d="M7 11.5l3 -3"></path>
      <path d="M14 8.5l3 3"></path>
      <path d="M14 11.5l3 -3"></path>
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
    </svg>
  )
}

// icon:arrow-right-circle-fill | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
export const NextIcon: TIcon = (props) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z" />
    </svg>
  )
}

// icon:arrow-left-circle-fill | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
export const PreviousIcon: TIcon = (props) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 7.5a.5.5 0 010 1H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5z" />
    </svg>
  )
}
