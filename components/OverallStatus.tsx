import { Center, Title } from '@mantine/core'
import { IconCircleCheck, IconAlertCircle } from '@tabler/icons-react'

export default function OverallStatus({
  state,
}: {
  state: { overallUp: number; overallDown: number; lastUpdate: number }
}) {
  let statusString = ''
  let icon = <IconAlertCircle style={{ width: 64, height: 64, color: '#b91c1c' }} />
  if (state.overallUp === 0 && state.overallDown === 0) {
    statusString = 'Không có dữ liệu'
  } else if (state.overallUp === 0) {
    statusString = 'Các máy chủ đều không hoạt động'
  } else if (state.overallDown === 0) {
    statusString = ''
    icon = <IconCircleCheck style={{ width: 128, height: 128, color: '#059669' }} />
  } else {
    statusString = `${state.overallDown} trong số ${state.overallUp + state.overallDown} máy chủ không hoạt động`
  }

  return (
    <>
      <Center>{icon}</Center>
      <Title mt="sm" style={{ textAlign: 'center' }} order={1}>
        {statusString}
      </Title>
      <Title mt="sm" style={{ textAlign: 'center', color: '#70778c' }} order={5}>
        Cập nhật vào lúc:{' '}
        {`${new Date(state.lastUpdate * 1000).toLocaleString('en-GB')} (${
          Math.round(Date.now() / 1000) - state.lastUpdate
        } giây trước)`}
      </Title>
    </>
  )
}
