'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const LOCAL_STORAGE_KEY = 'ageVerified'

const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isDeclined, setIsDeclined] = useState<boolean>(false)

  useEffect(() => {
    // Zkontrolujeme localStorage až na straně klienta
    const alreadyVerified = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!alreadyVerified) {
      setIsVisible(true)
    }
  }, [])

  const handleConfirm = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    setIsDeclined(true)
    // Alternativně: window.location.href = 'https://www.google.com';
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <Image 
          src="/logo/dvasmysly.svg" 
          alt="Dva Smysly Logo" 
          width={150} 
          height={60} 
          className="mx-auto mb-6 h-auto"
        />
        
        {isDeclined ? (
          <>
            <h2 className="text-xl font-semibold mb-4 text-red-600">Přístup odepřen</h2>
            <p className="text-muted-foreground">
              Obsah těchto stránek je určen pouze pro osoby starší 18 let.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Ověření věku</h2>
            <p className="text-muted-foreground mb-6">
              Pro vstup na tyto stránky musíte být starší 18 let. Potvrďte prosím svůj věk.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={handleConfirm}
                className="bg-[#1a472a] hover:bg-[#2a573a] text-white"
                size="lg"
              >
                Ano, je mi 18+ let
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                size="lg"
                className="border-destructive text-destructive hover:bg-destructive hover:text-white"
              >
                Ne, je mi méně
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AgeVerificationModal 