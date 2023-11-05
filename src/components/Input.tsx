import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>
function Input(props: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

type PrefixProps = ComponentProps<'div'>
function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>
function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

Input.Root = Input
Input.Prefix = Prefix
Input.Control = Control

export default Input
