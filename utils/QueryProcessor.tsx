export default function QueryProcessor(query: string): string {
  const lowerCaseQuery = query.toLowerCase();

  if (lowerCaseQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerCaseQuery.includes("usb id")) {
    // TODO: añade tu USB ID a continuación
    // TODO: actualiza el caso de prueba correspondiente en __tests__
    return "15-11669";
  }

  if (lowerCaseQuery.includes("name")) {
    // TODO: añade tu nombre a continuación
    // TODO: actualiza el caso de prueba correspondiente en __tests__
    return "ANGRODHER2";
  }

  // Si no coincide con ningún caso
  return "";
}
