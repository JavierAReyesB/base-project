import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PageWrapper } from '@/app/layout/PageWrapper'

export default function ContratosPage() {
  return (
    <PageWrapper
      title='Contratos'
      description='Gestión de contratos registrados en el sistema.'
    >
      <div className='flex justify-end'>
        <Button asChild>
          <Link href='#'>+ Nuevo contrato</Link>
        </Button>
      </div>

      <div className='rounded-md border border-muted p-4'>
        <p className='text-sm text-muted-foreground'>
          No hay contratos registrados todavía.
        </p>
      </div>
    </PageWrapper>
  )
}
