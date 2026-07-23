import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function formatDateTime(rowDate: string): string {
  const date = new Date(rowDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formarDistanceToNow(rowDate: string): string {
  const date = new Date(rowDate);

  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
