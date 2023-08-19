import type { HeatMapValue } from '@uiw/react-heat-map'
import Tooltip from '@uiw/react-tooltip'

interface IProps {
    props: React.SVGProps<SVGRectElement>
    data: HeatMapValue & {
        column: number;
        row: number;
        index: number;
    }
}
export const ToolTip: React.FC<IProps> = ({ props, data }) => {
    return (
        <Tooltip placement="top" content={`${data.count || 0} Posts on ${data.date}`}>
            <rect {...props} />
        </Tooltip>
    )
}