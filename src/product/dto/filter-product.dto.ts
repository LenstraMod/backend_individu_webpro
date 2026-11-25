import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class FilterProductDto{
    @IsOptional()
    @IsString()
    search? : string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    minPrice? : number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    maxPrice?: number;
}