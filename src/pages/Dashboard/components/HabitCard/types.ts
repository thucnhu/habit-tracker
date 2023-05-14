export interface HabitCardProps {
  name: string
  chickens: number
  percentage: number
  days: number
  hours: number
  minutes: number
  interval: string
}

export interface EditHabitCardProps extends HabitCardProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}