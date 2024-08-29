import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function dateFormattPublished(date: Date): string {
  const publishedDateFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  return publishedDateFormatted;
}

export function dateFormatToNow(date: Date): string {
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return publishedDateRelativeToNow;
}
