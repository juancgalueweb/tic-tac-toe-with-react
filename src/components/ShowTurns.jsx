import { TURNS } from '../constants/constants.js'
import { Square } from './Square'

export const ShowTurns = ({ turn }) => {
  return (
    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}
