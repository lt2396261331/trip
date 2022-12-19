import dayjs from 'dayjs'

export const formatMonthDay = (date) => dayjs(date).format('MM月DD日')

export const getDiffDays = (endTime, startTime) => dayjs(endTime).diff(startTime, "day")
