import Button from '@codegouvfr/react-dsfr/Button'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'

type ElementWithHintProps = {
  helpText: string | undefined
} & PropsWithChildren

export default function LabelWithHint({
  helpText,
  children,
}: ElementWithHintProps) {
  const [showHint, setShowHint] = useState(false)

  if (children == undefined) {
    return null
  }

  return (
    <div className="flex flex-col ">
      <div className="flex" style={{ alignItems: 'center' }}>
        {children}
        {helpText ? (
          <Button
            type="button"
            iconId={
              !showHint
                ? 'fr-icon-information-line'
                : 'fr-icon-information-fill'
            }
            size="small"
            priority="tertiary no outline"
            onClick={() => setShowHint(!showHint)}
            // NOTE: why the children prop is required for Button with icon?
            children={null}
          />
        ) : null}
      </div>
      {showHint ? <p className="fr-hint-text">{helpText}</p> : null}
    </div>
  )
}
