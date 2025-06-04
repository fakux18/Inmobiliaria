export default function Admin() {
  return (
    <div className="w-dvh h-dvh flex justify-center items-center">
      <div className="bg-red-700 w-10/12 rounded-xl h-60 flex flex-col p-4 max-w-lg">
          <div className="flex flex-col">
            <label>Correo electrónico:</label>
            <input className="p-2 rounded-md" type="email" id="email" name="email" required />
          </div>

          <div className="flex flex-col">
            <label>Contraseña:</label>
            <input className="p-2 rounded-md" type="password" id="password" name="password" required />
          </div>

          <div>
            <button type="submit">Iniciar sesión</button>
          </div>
      </div>
    </div>
  )
}
