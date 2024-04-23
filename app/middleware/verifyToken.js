const jwt = require('jsonwebtoken');

module.exports = verifyToken = (requiredRole) => {
  return (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
  
    if (typeof bearerHeader !== 'undefined') {
      const token = bearerHeader.split(' ')[1];

      try {
        const verified = jwt.verify(token, 'SECRET');
        req.user = verified;

        console.log(verified)
        if (requiredRole && verified.role !== requiredRole) {
          return res.status(403).json({ message: "No tiene permiso para realizar esta acción" });
        }

        next();
      } catch (error) {
        res.status(403).json({ message: "Token inválido o expirado" });
      }
    } else {
      res.status(401).json({ message: "Acceso denegado. No se proporcionó token." });
    }
  };
};