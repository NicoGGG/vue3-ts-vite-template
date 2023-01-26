import { ref } from 'vue'

export const useCounter = () => {
  const count: any = ref(0)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }
  return { count, increment, decrement }
}
