export interface HabitCardProps {
  name: string
  chickens: number
  percentage: string
  days: string
  hours: string
  minutes: string
  interval: string
}

export interface EditHabitCardProps extends HabitCardProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}