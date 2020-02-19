/**
 * 工具包
 */
import uuidv4 from "uuid/v4";
// 生成uuid
export function getUUid(): string {
  const uuid = uuidv4();
  return uuid.slice(0, 6);
}
