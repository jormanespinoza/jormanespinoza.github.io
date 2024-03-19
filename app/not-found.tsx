import { Metadata } from 'next'

import styles from '@/app/_assets/styles/not-found.module.scss'

export const metadata: Metadata = {
  title: '404 | Jorman Espinoza'
}

export default function NotFoundPage() {
  return (
    <div className={styles['not-found']}>
      <h2>404</h2> Recurso no encontrado
    </div>
  )
}
