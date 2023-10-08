import { Ano } from "../models/ano"
import { Mes } from "../models/mes"
import { Injectable } from '@angular/core';
import { Seguimento } from "../models/seguimento";
import { SubSeguimento } from "../models/subSeguimento";
import { Tipo } from "../models/tipo";


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  seguimentos: Seguimento[] = [
    { value: 1, nome: "Carros" },
    { value: 2, nome: "Motos" },

  ]
  subSeguimentos: SubSeguimento[] = [
    { value: 1, nome: "Automóveis*", seguimento: { value: 1, nome: "Carros" } },
    { value: 2, nome: "Comerciais Leves", seguimento: { value: 1, nome: "Carros" } },
  ]

  tipos: Tipo[] = [
    { chave: 'veiculos_de_entrada', nome: 'Veículos de Entrada' },
    { chave: 'hatch_pequenos', nome: 'Hatch Pequenos' },
    { chave: 'hatch_medios', nome: 'Hatch Médios' },
    { chave: 'sedans_pequenos', nome: 'Sedans Pequenos' },
    { chave: 'sedans_compactos', nome: 'Sedans Compactos' },
    { chave: 'sedans_medios', nome: 'Sedans médios' },
    { chave: 'sedans_grandes', nome: 'Sedans Grandes' },
    { chave: 'sw_medios', nome: 'Sw Médios' },
    { chave: 'sw_grandes', nome: 'Sw Grandes' },
    { chave: 'monocap', nome: 'Monocab' },
    { chave: 'grandcap', nome: 'Grandcab' },
    { chave: 'sports', nome: 'Sports' },
    { chave: 'suvs', nome: 'Suvs' },
    { chave: 'pickups_pequenas', nome: 'Pick-ups Pequenas' },
    { chave: 'pickups_grandes', nome: 'Pick-ups Grandes' },
    { chave: 'furgoes', nome: 'Furgões' },
    { chave: 'furgoes_pequenos', nome: 'Furgões Pequenos' },
  ]




  anos: Ano[] = [
    { value: 2003 },
    { value: 2004 },
    { value: 2005 },
    { value: 2006 },
    { value: 2007 },
    { value: 2008 },
    { value: 2009 },
    { value: 2010 },
    { value: 2011 },
    { value: 2012 },
    { value: 2012 },
    { value: 2013 },
    { value: 2014 },
    { value: 2015 },
    { value: 2016 },
    { value: 2017 },
    { value: 2018 },
    { value: 2019 },
    { value: 2020 },
    { value: 2021 },
    { value: 2022 },
    { value: 2023 },
  ]
  meses: Mes[] = [
    //{ value: 13, nome: "Todos os Meses" },
    { value: 1, nome: "Janeiro" },
    { value: 2, nome: "Fevereiro" },
    { value: 3, nome: "Março" },
    { value: 4, nome: "Abril" },
    { value: 5, nome: "Maio" },
    { value: 6, nome: "Junho" },
    { value: 7, nome: "Julho" },
    { value: 8, nome: "Agosto" },
    { value: 9, nome: "Setembro" },
    { value: 10, nome: "Outubro" },
    { value: 11, nome: "Novembro" },
    { value: 12, nome: "Dezembro" },

  ]

  nomeMes = (numeroMes: number): any => {
    switch (numeroMes) {
      case 1: return 'Janeiro'
      case 2: return 'Fevereiro'
      case 3: return 'Março'
      case 4: return 'Abril'
      case 5: return 'Maio'
      case 6: return 'Junho'
      case 7: return 'Julho'
      case 8: return 'Agosto'
      case 9: return 'Setembro'
      case 10: return 'Outubro'
      case 11: return 'Novembro'
      case 12: return 'Dezembro'
      //case 13: return 'Todos os Meses'
      default: undefined

    }
  }

  CHART_COLLORS = ['#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226',
    '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#f9c80e', '#f86624', '#ea3546', '#662e9b', '#43bccd']

  CHART_COLORS2 = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
    //'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'
  ]



  agruparLista = (lista: any, propriedade: any) => {
    return lista.reduce(function (total: any, obj: any) {
      let chave = obj[propriedade];
      if (!total[chave]) {
        total[chave] = [];
      }
      total[chave].push(obj);
      return total;
    }, {});
  };

}