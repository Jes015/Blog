import DefaultHeatMap from '@uiw/react-heat-map'
import { HeatMapFilters, ToolTip } from './components'
import styles from './heatmap.module.css'
const value = [
  { date: '2016/01/11', count: 2 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/01/${idx + 10}`, count: idx, })),
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, })),
  { date: '2023/08/12', count: 2 },
  { date: '2023/08/01', count: 5 },
  { date: '2023/09/02', count: 5 },
  { date: '2023/08/03', count: 1 },
  { date: '2023/08/04', count: 11 },
  { date: '2023/08/08', count: 32 },
]

const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const date = new Date()
date.setMonth(new Date().getMonth() - 4)
export const HeatMap = () => {
  return (
    <div className={styles.heatmap__container}>
      <section className={styles['heatmap__main-section']} id='heatmap'>
        <DefaultHeatMap
          value={value}
          weekLabels={weekLabels}
          monthLabels={monthLabels}
          startDate={date}
          style={{ width: '10em', height: '13.5em', color: 'var(--text-color)', flexGrow: 1 }}
          panelColors={{
            0: 'var(--background-heatmap-rec)',
            2: 'var(--background-heatmap-rec-20-day)', // var(--background-heatmap-rec-2-day)
            4: 'var(--background-heatmap-rec-4-day)',
            10: 'var(--background-heatmap-rec-10-day)',
            20: 'var(--background-heatmap-rec-20-day)',
          }}
          rectProps={{
            rx: '0.3em',
            className: styles.rect,
          }}
          rectRender={(props, data) => {
            return (<ToolTip {...{ props, data }} />)
          }}
        />
      </section>
      <HeatMapFilters />
    </div>
  )
}
