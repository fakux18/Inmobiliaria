export default function Admin() {
  return (
    <div className="w-dvh h-dvh flex justify-center items-center">
      <div className="bg-green-500/50 w-10/12 rounded-xl h-60 flex flex-col p-4 gap-3 max-w-lg border-2 border-slate-700">
          <div className="flex flex-col">
            <label className="text-center text-sm mb-3">Correo electrónico</label>
            <input className="p-2 rounded-md" type="email" id="email" name="email" required />
          </div>

          <div className="flex flex-col">
            <label className="text-center text-sm mb-3">Contraseña</label>
            <input className="p-2 rounded-md" type="password" id="password" name="password" required />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="p-2 bg-blue-400 rounded-lg px-6">Iniciar sesión</button>
          </div>
      </div>
    </div>
  )
}
