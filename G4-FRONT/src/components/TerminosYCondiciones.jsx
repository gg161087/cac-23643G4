import "./TerminosYCondiciones.css";

const TerminosYCondiciones = () => {
  const toggleAccordion = (itemId) => {
    const content = document.getElementById(itemId);
    const button = document.getElementById(`button-${itemId}`);

    // Oculta o muestra el contenido según su estado actual
    if (content.style.display === "block" || !content.style.display) {
      content.style.display = "none";
      button.classList.remove("active");
    } else {
      content.style.display = "block";
      button.classList.add("active");
    }
  };

  return (
    <>
      <div className="terminos-y-condiciones">
        Este contrato describe los términos y condiciones generales (los
        “Términos y Condiciones Generales”) aplicables al acceso y uso de los
        servicios ofrecidos por ITECHNOLOGY (“los Servicios”) dentro del sitio
        www.itechnology.com.ar (o el “Sitio”). Cualquier persona que desee
        acceder y/o usar el Sitio o los Servicios (los “Usuarios”) podrá hacerlo
        sujetándose a los Términos y Condiciones Generales, junto con todas las
        demás políticas y condiciones que rigen al Sitio y que son incorporados
        al presente por referencia. En consecuencia, todas las visitas y cada
        uno de los contratos y transacciones que se realicen en este Sitio, como
        asimismo sus efectos jurídicos, quedarán regidos por estos Términos y
        Condiciones Generales y sometidas a la legislación aplicable en la
        República Argentina. Itechnology recomienda especialmente guardar una
        copia impresa de estos Términos y Condiciones Generales. Los Términos y
        Condiciones Generales se aplicarán y se entenderán como formando parte
        de cada uno de los actos y contratos que se ejecuten o celebren mediante
        los sistemas de oferta y comercialización comprendidos en el Sitio entre
        los Usuarios y Itechnology, y por cualquiera de las otras sociedades o
        empresas que sean filiales, vinculadas, controladas y/o controlantes de
        Itechnology, y que hagan uso de este Sitio, a las cuales se las
        denominará en adelante también en forma indistinta como “las Empresas”,
        o bien “la Empresa Oferente”, el “Proveedor” o la “Empresa Proveedora”,
        según convenga al sentido del texto. CUALQUIER PERSONA QUE NO ACEPTE
        ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER
        OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO Y/O LOS
        SERVICIOS. En forma previa a su registración y a cada contratación, el
        Usuario deberá leer, entender y aceptar todos los términos y condiciones
        establecidos en estos Términos y Condiciones Generales y en las
        políticas de Itechnology, así como sus modificaciones. Si el Usuario
        utiliza este Sitio significa que ha aceptado plenamente los Términos y
        Condiciones Generales y las políticas de Itechnology obligándose a
        cumplir expresamente con los mismos.
      </div>
      <div className="accordion">
        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item1")}
        >
          1. FIJACIÓN DE TÉRMINOS
        </button>
        <div className="accordion-content" id="item1">
          <p>
            En función de lo expresado ut supra, se fija en el presente los
            términos y condiciones a los efectos del uso por parte del Usuario
            Cliente del sitio www.itechnology.com.ar.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item2")}
        >
          2. DERECHOS DE MODIFICACIÓN
        </button>
        <div className="accordion-content" id="item2">
          <p>
            ITECHNOLOGY se reserva el derecho de realizar cambios en el Sitio,
            en las condiciones de uso, en las publicaciones que realice de sus
            ofertas y en las notificaciones que correspondieren, en cualquier
            momento y con la simple modificación del presente, bastando para
            darse por notificado al usuario comunicándolo a través de la mera
            publicación en el Sitio. Asimismo, ITECHNOLOGY se reserva el derecho
            en cualquier momento de interrumpir el servicio ofrecido, sin previo
            aviso a los usuarios/Clientes, en forma transitoria o definitiva y
            sin necesitar en ningún momento consentimiento del Usuario/Cliente.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item3")}
        >
          3. ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES
        </button>
        <div className="accordion-content" id="item3">
          <p>
            En función de lo expresado en el punto 2 del presente, cada vez que
            el Usuario/Cliente desee utilizar el Sitio, se consideran aceptados
            todos y cada uno de los términos y condiciones especificados en el
            presente con el mero uso de la web y su navegación.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item4")}
        >
          4. DE LOS DATOS
        </button>
        <div className="accordion-content" id="item4">
          <p>
            Para utilizar los Servicios ofrecidos por www.itechnology.com.ar los
            Usuarios deberán facilitar determinados datos de carácter personal
            sobre los cuales se hacen plenamente responsable de su correcta
            inclusión y veracidad en la base de clientes de la Empresa. Su
            información personal se procesa y almacena en servidores o medios
            magnéticos que mantienen altos estándares de seguridad y protección
            tanto física como tecnológica. Para mayor información sobre la
            privacidad de los Datos Personales y casos en los que será revelada
            la información personal, ver lo referido al respecto en el apartado
            5) y consultar nuestras Políticas de Privacidad.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item6")}
        >
          6. ACCIONES EXTERNAS
        </button>
        <div className="accordion-content" id="item6">
          <p>
            No está permitida ninguna acción o uso de dispositivo, software, u
            otro medio tendiente a interferir tanto en las actividades y
            operatoria de Itechnology como en las ofertas, descripciones,
            cuentas o bases de datos de Itechnology. Cualquier intromisión,
            tentativa o actividad violatoria o contraria a las leyes sobre
            derecho de propiedad intelectual y/o a las prohibiciones estipuladas
            en este contrato, como el mal uso de las bases de datos, harán
            pasible a su responsable de las acciones legales pertinentes, y a
            las sanciones previstas por este acuerdo, así como lo hará
            responsable de indemnizar los daños y perjuicios ocasionados.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item7")}
        >
          7. DE LA CAPACIDAD PARA CONTRATAR CON ITECHNOLOGY
        </button>
        <div className="accordion-content" id="item7">
          <p>
            Los Servicios sólo están disponibles para personas que tengan
            capacidad legal para contratar. No podrán utilizar los Servicios las
            personas que no tengan esa capacidad, los menores de edad o Usuarios
            de www.itechnology.com.ar que hayan sido suspendidos temporal o
            permanentemente o inhabilitados definitivamente. Si se está
            registrando un Usuario como empresa, se debe tener capacidad para
            contratar a nombre de tal entidad y de obligar a la misma en los
            términos aquí contemplados.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item8")}
        >
          8. MODIFICACIONES DE CONDICIONES Y TÉRMINOS GENERALES
        </button>
        <div className="accordion-content" id="item8">
          <p>
            En caso de que estos Términos y Condiciones Generales sean
            modificados, tales modificaciones serán publicadas en el Sitio,
            obrando en él la versión vigente al momento del inicio de cada
            sesión por parte de los Usuarios. Toda vez que por tratarse de un
            sitio web abierto a los clientes en general, Itechnology carece de
            posibilidad de notificarle particularmente a cada uno de ellos,
            salvo mediante la publicación en el propio Sitio, por lo que el
            Usuario se compromete a verificar en forma personal los Términos y
            Condiciones Generales con cualquier uso que haga del Sitio,
            entendiéndose que al iniciar cada sesión acepta las que estén
            vigentes y publicadas en ese momento en la forma y con los efectos
            establecidos en los presentes Términos y Condiciones Generales.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item9")}
        >
          9. DEL PROCESO DE COMPRA
        </button>
        <div className="accordion-content" id="item9">
          <p>
            Procedimiento para hacer uso de este Sitio en los contratos
            ofrecidos por medio de este Sitio, la Empresa oferente informará, de
            manera inequívoca y fácilmente accesible, los pasos que deben
            seguirse para celebrarlos e informará, cuando corresponda, si el
            documento electrónico en que se formalice el contrato será archivado
            y si éste será accesible al Usuario. El sólo hecho de seguir y
            cumplimentar los pasos que para tales efectos se indican en este
            Sitio para efectuar una compra, equivale a aceptar que efectivamente
            la Empresa oferente ha dado cumplimiento a las condiciones
            contenidas en este apartado y regulados por la ley 24.240 en todo su
            articulado, además, su dirección de correo postal así como el
            electrónico y demás medios técnicos que brinda a la página Web, será
            responsabilidad propia y excluyente del usuario y se
            responsabilizará en la corrección de errores o actualizaciones para
            evitar inconvenientes en el envío de sus productos.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item10")}
        >
          10. PERFECCIONAMIENTO DE LOS CONTRATOS CELEBRADOS A TRAVÉS DE ESTE
          SITIO
        </button>
        <div className="accordion-content" id="item10">
          <p>
            A través de este Sitio las Empresas pertenecientes al grupo
            Itechnology realizarán ofertas de bienes y servicios que podrán ser
            confirmadas a través de la aceptación por vía electrónica utilizando
            los mecanismos que el mismo Sitio ofrece para ello. Toda aceptación
            de oferta quedará sujeta a la condición suspensiva de que la Empresa
            Oferente valide la transacción en su más amplia acepción, para lo
            cual realizará los controles válidos a tal fin, reservandose el
            derecho de aceptación o rechazo de la operación, siguiendo criterios
            para la prevención de fraudes. En consecuencia, para toda operación
            que se efectúe en este Sitio, la confirmación y/o validación o
            verificación por parte de la Empresa Oferente, será requisito para
            el perfeccionamiento del contrato. Para validar la transacción la
            Empresa Oferente deberá verificar: a) Que dispone, en el momento de
            la aceptación de oferta, de las especies en stock; b) Que valida y
            acepta el medio de pago ofrecido por el Usuario, no siendo necesario
            que coincidan usuario y titularidad del medio de pago, siendo
            responsable el usuario exclusivamente de tal uso; c) Que los datos
            registrados por el Usuario en el Sitio coinciden con los
            proporcionados al efectuar su aceptación de oferta; d) Que no hay
            inexactitudes o errores en el producto, servicio o información; y e)
            Que no existen problemas identificados relacionados con fraude de
            crédito y de precios. Para informar al Usuario acerca de esta
            validación, la empresa tiene contratada una plataforma o herramienta
            informática que permite la determinación de un “score” automático
            del futuro cliente autodeterminando de esta manera la continuidad de
            la operación o no. Esta verificación se lleva a cabo de manera
            unilateral por la empresa realizando un análisis de datos personales
            del usuario, tales como cruzamiento de datos entre titular de la
            Orden de Compra y el titular del Medio de Pago elegido (pagador),
            análisis pormenorizado de resultados en boreau de riesgos
            crediticios, chequeo con operaciones históricas del Usuario/Cliente
            y titularidad de medio de pago, sin que ésta descripción sea
            excluyente o limitante para la validación o confirmación de la
            operación, siendo la política de anti fraude estrícta y determinante
            a tal fin. Esta validación genera dos resultados: Aprobación y
            Rechazos; resultando que de la “aprobación” se procesa normalmente
            la orden de compra. En cambio el “rechazo” no genera el inicio de la
            facturación en nuestro sistema y el cliente recibe el rechazo sobre
            el pedido de compra. El contrato se entenderá perfeccionado desde el
            momento en que se envía o comunica esta confirmación escrita al
            Usuario y en el lugar en que fue expedida. La aceptación efectuada
            por el Usuario es irrevocable salvo en circunstancias excepcionales,
            tales como que Itechnology cambie sustancialmente la descripción del
            artículo después de realizada la aceptación, o que exista un claro
            error tipográfico o de precios. Itechnology se reserva el derecho,
            cuando tenga razones que así lo justifiquen, de limitar la cantidad
            de artículos o unidades comprados por persona, por hogar o por
            pedido. Estas restricciones pueden ser aplicables a los pedidos
            realizados por la misma cuenta o la misma tarjeta de crédito y
            también a los pedidos que utilizan la misma dirección de facturación
            y/o de entrega. Al aceptar los presentes términos y condiciones se
            acepta la posiblidad y viabilidad del rechazo unilateral que
            realiza, a través de criterios objetivos y políticas de prevención
            de fraude, y renunciándose a cualquier reclamo por parte del
            Usuario/Cliente de iniciar cualquier reclamo en tal sentido.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item11")}
        >
          11. INDEMNIDAD
        </button>
        <div className="accordion-content" id="item11">
          <p>
            Asimismo, el Sitio sólo se puede utilizar con fines lícitos. El
            Cliente/Usuario se obliga a mantener indemne a ITECHNOLOGY por
            cualquier tipo de reclamo, extrajudicial, administrativo o judicial,
            de cualquier tercero, por el uso del Sitio por parte de
            Usuario/Cliente o en caso de verificarse multas y/o deudas de
            cualquier tipo en función del desempeño o actividad realizada por el
            Usuario/Cliente en el Sitio, como de los datos ingresados al sistema
            y utilizado para la validación y/o confirmación de sus operaciones,
            medios de pago, etc. debiendo mantener indemne también por ello a
            Itechnology.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item13")}
        >
          13. PROMOCIONES
        </button>
        <div className="accordion-content" id="item13">
          <p>
            Las promociones que se ofrezcan en este Sitio no son necesariamente
            las mismas que ofrezcan otros canales de venta utilizados por las
            Empresas del Grupo Itechnology , tales como tiendas físicas, venta
            telefónica, catálogos u otros, a menos que se señale expresamente en
            este Sitio o en la publicidad que realicen las Empresas para cada
            promoción. En los casos que el Sitio contenga promociones que
            consistan en la entrega gratuita o rebajada de un producto y/o
            servicio por la compra de otro, entonces el despacho del bien que se
            entregue gratuitamente o a precio rebajado, se hará en el mismo
            lugar en el cual se despacha el producto comprado. No se podrá
            participar en estas promociones sin adquirir conjuntamente todos los
            productos y/o servicios comprendidos en ellas, salvo que la
            promoción indique expresamente lo contrario. Salvo indicación en
            contrario o aprobación por parte de Itechnology las promociones no
            son acumulativas unas con otras. Itechnology no se hace responsable
            por la existencia de campañas fraudulentas o capacitación de
            clientes a través de falsas páginas y/o ofertas masivas falsas (por
            cualquier vía o medio informático, celulares, etc ) con la tipología
            y denominación de la empresa a través del sistema de fraude
            &quot;phishing&quot; o similar.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item14")}
        >
          14. DEL PAGO
        </button>
        <div className="accordion-content" id="item14">
          <p>
            Los productos y servicios ofrecidos en este Sitio, salvo que se
            señale una forma diferente para casos particulares u ofertas de
            determinados bienes o servicios, sólo pueden ser pagados con las
            modalidades de pago que se encuentren autorizadas por Itechnology al
            efecto y que se encuentran informadas en el Sitio. Las tarjetas
            emitidas en el extranjero no admiten la modalidad de pago en cuotas.
            Tratándose de tarjetas bancarias aceptadas en este Sitio, los
            aspectos relativos a éstas, tales como la fecha de emisión,
            caducidad, cupo, bloqueos, etc., se regirán por el respectivo
            contrato de apertura y reglamento de uso, de tal forma que las
            Empresas del Grupo Itechnology no tendrán responsabilidad en
            cualquiera de los aspectos señalados. El Sitio podrá indicar
            determinadas condiciones de compra según el medio de pago que
            seleccione el usuario y pretenda utilizar el mismo y Itechnology
            podrá incorporar, excluir o suspender cualquier medio de pago en
            cualquier momento sin previo aviso y sin que esto genere
            responsabilidad alguna.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item15")}
        >
          15. TARIFAS Y FACTURACION
        </button>
        <div className="accordion-content" id="item15">
          <p>
            La registración en www.itechnology.com.ar es gratuita. Al adquirir
            un producto o servicio allí ofrecido, el Usuario deberá pagar el
            precio publicado y “en caso de corresponder” los gastos de envío y
            entrega. Itechnology se reserva el derecho de modificar, cambiar,
            agregar, o eliminar las tarifas vigentes, en cualquier momento, lo
            cual será publicado en el Sitio y el Usuario lo consiente al
            realizar la navegación por el sitio web. Asimismo, Itechnology podrá
            modificar temporalmente la política de tarifas y los precios de sus
            productos y servicios por razón de promociones, siendo efectivas
            estas modificaciones cuando se haga pública la promoción o se
            realice el anuncio y hasta la fecha de su finalización conforme la
            publicación. Itechnology se reserva el derecho de tomar las medidas
            judiciales y extrajudiciales que estime pertinentes para obtener el
            pago del monto debido. En caso de haberse facturado cargos que no
            hubiesen correspondido, el Usuario deberá comunicarse con el
            servicio de atención al cliente para resolver dicha cuestión.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item16")}
        >
          16. LA MODALIDAD DE LA FACTURACIÓN
        </button>
        <div className="accordion-content" id="item16">
          <p>
            Por ventas online, podrá emitirse tanto para responsable inscripto
            (Factura tipo “A”) como para consumidor final (Factura tipo “B”)
            siendo estas las dos únicas modalidades de facturación para ventas
            online. Las mismas son enviadas a la dirección de correo electrónico
            informado por el Usuario. La condición de I.V.A., se podrá acreditar
            por el usuario en dos oportunidades, siendo la primera al momento de
            la creación de su cuenta y la segunda, al momento de confirmar el
            pedido. Itechnology no se hace responsable por la utilización de las
            tarjetas, su titularidad, etc siendo el Usuaio/Cliente el único
            responsable por la consignación de datos de tal medio de pago, como
            todos los aceptados, conforme modalidad de pago aquí mencionada y
            aceptada.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item17")}
        >
          17. DEL DESPACHO DE PRODUCTOS
        </button>
        <div className="accordion-content" id="item17">
          <p>
            Los productos adquiridos a través del Sitio se sujetarán a las
            condiciones de despacho y entrega elegidas por el Usuario y
            disponibles en el Sitio. La información del lugar de envío es de
            exclusiva responsabilidad del Usuario. Los plazos elegidos para el
            despacho y entrega, se cuentan desde que la Empresa Oferente haya
            validado la orden de compra y el medio de pago utilizado, y se
            consideran días hábiles para el cumplimiento de dicho plazo. El
            servicio de entrega a domicilio se encuentra habilitado en
            determinadas localidades del país, las cuales podrán ser consultadas
            al tiempo de iniciarse el proceso de compra a través del Sitio. Es
            posible que para determinadas zonas los productos adquiridos a
            través del Sitio deban ser retirados por las sucursales de
            Itechnology o de la empresa que preste los servicios de
            correspondencia, más cercana al domicilio del adquirente conforme se
            indique en el Sitio. La entrega de los productos incluye el traslado
            hasta la puerta del domicilio declarado por el Usuario (puerta del
            edificio en caso de departamentos). No podrán ser enviados productos
            a casillas de correo, a retirar de un expreso o terminal. En caso de
            que, por dificultades imprevistas y/o circunstancias de fuerza
            mayor, Itechnology no pudiere cumplir con la entrega a domicilio,
            según los plazos por zona geográfica, tratará de darle aviso lo más
            pronto posible al Usuario y entregará los productos en un nuevo día
            y dentro de la franja horaria a convenir, sin que se devengue por
            ello ningún cargo adicional para el Usuario u Itechnology. Cualquier
            plazo pactado de entrega informado es estimado pudiéndose verificar
            demoras en la entrega de los productos por causales ajenas al
            control de Itechnology. Es posible que el envío de productos a
            determinadas localidades irrogue un costo de entrega el cual será
            informado en el Sitio.En algunos casos el operador logistico podrá
            solicitarte una palabra clave que te llegará al mail con el que
            realizaste la compra. Revisar por favor la casilla de correos no
            deseados (spam).
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item18")}
        >
          18. DEL CAMBIO DE PRODUCTOS
        </button>
        <div className="accordion-content" id="item18">
          <p>
            Los cambios o devoluciones, deberán realizarse dentro del plazo de
            10 días corridos desde la recepción del producto. Para tramitar el
            cambio o la devolución, es necesario contactarse al siguiente acceso
            https://www.itechnology.com.ar/centro-ayuda , proporcionando las
            instrucciones necesarias para realizar el cambio o la devolución:
            Motivo, nro. de DNI y nro. de Pedido. A fin de que proceda el cambio
            o devolución de un producto adquirido, el mismo debe encontrarse sin
            uso, en perfecto estado conservación, completo y con los embalajes
            originales, etiquetas y estampillas de aduana, como así también con
            todos sus accesorios, periféricos y manuales, también en perfecto
            estado, y acompañando su factura/ticket de compra o remito
            (originales o fotocopias) respectivos. Una vez recibido el producto
            por Itechnology y examinado el mismo, se procederá a la restitución
            de la suma abonada en concepto de precio, por el mismo medio en que
            fue abonado el producto. Para el caso de productos que hayan
            requerido algún tipo de instalación deberán contactarse por la misma
            vía telefónica y/o correo electrónico donde se informarán los pasos
            a seguir. La devolución del producto por el Usuario no supondrá
            penalización alguna para la Empresa ni para el Usuario, si bien la
            Empresa deberá satisfacer directamente los gastos de entrega y
            devolución. Si al recibir el producto, la Empresa Proveedora
            constata que la mercadería no se encuentra en las condiciones
            fijadas precedentemente, el producto será puesto a disposición del
            Usuario para su retiro y ningún monto será reintegrado por ningún
            concepto y sin que ello genere derecho a indemnización alguna. No se
            aceptan cambios de productos de cuidado personal u otros bienes
            consumibles o que se indiquen en el Sitio. El costo del envío y
            retiro, según sea el caso, será asumido por Itechnology cuando la
            devolución o cambio se produzca porque: a) El producto no
            corresponde al detalle de la factura. b) El producto corresponde al
            detalle de la factura, pero no es lo solicitado en la orden de
            compra. c) El producto entregado se encuentra dañado. Para evitar
            inconvenientes, es muy importante que al momento de la recepción de
            la compra el Usuario revise el buen estado de los productos antes de
            firmar el remito de entrega. Itechnology se reserva el derecho a no
            admitir el cambio o devolución de los productos si no se efectúa en
            tiempo y forma o no presentan los documentos indicados
            precedentemente, o si la información que los mismos contienen es
            incompleta, ilegible, o no se presentan con todos sus componentes
            completos o en las condiciones establecidas precedentemente.
            Asimismo, y para el caso de que se dé que el producto no presente
            las condiciones aquí descriptas y/o sea a solicitud del propio
            cliente el cambio, será a su costo exclusivo el gasto que demande la
            devolución y posterior entrega del nuevo producto.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item19")}
        >
          19. DE OTROS SITIOS WEB
        </button>
        <div className="accordion-content" id="item19">
          <p>
            La Empresa Itechnology no tendrá responsabilidad sobre la
            información proporcionada por otros sitios web y las consecuencias
            que de ello se deriven. La Empresa no garantizan, avalan ni
            respaldan de ninguna forma el acceso, información o contenido de
            cualquier otro sitio web o portal en los casos que dicho acceso se
            efectúe desde o hacia este, ya sea que dicho acceso se efectúe
            mediante link, banner o mediante cualquier dispositivo disponible en
            la red. El Sitio puede contener enlaces a otros sitios web lo cual
            no indica que sean propiedad u operados por Itechnology. En virtud
            que Itechnology no tiene control sobre tales sitios, NO será
            responsable por los contenidos, materiales, acciones y/o servicios
            prestados por los mismos, ni por daños o pérdidas ocasionadas por la
            utilización de los mismos, sean causadas directa o indirectamente.
            La presencia de enlaces a otros sitios web no implica una sociedad,
            relación, aprobación, respaldo de Itechnology a dichos sitios y sus
            contenidos y tampoco podrá hacer responsable a ITECHNOLOGY por los
            fraudes que por tales vías acontezcan.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item20")}
        >
          20. DESCRIPCIÓN E IMAGEN DE LOS PRODUCTOS
        </button>
        <div className="accordion-content" id="item20">
          <p>
            Itechnology realiza la tarea de publicación y oferta con la mayor
            diligencia y/o responsabilidad, siendo dicha tarea lo más preciso
            posible en la descripción de sus productos. Sin embargo, es posible
            que las descripciones de los productos u otros contenidos de este
            Sitio no sean exactas o contengan errores involuntarios. Sin
            perjuicio de lo dispuesto en el artículo 34 de la Ley Nº 24.240, en
            caso de existencia de error entre la imagen publicitada de un
            producto y el producto adquirido, el Usuario tendrá derecho a
            cancelar el pedido hasta 10 días corridos de que hubiere sido
            entregado sin recibir observación alguna por parte del Usuario. En
            caso de cancelación del pedido una vez recibido el producto, el
            Usuario fundándose en inexactitudes en la descripción o imágenes del
            producto, deberá reintegrar el mismo en perfecto estado,
            conjuntamente con todo su empaque original y todos sus accesorios.
            Dicha situación no dará derecho a compensación alguna a favor del
            Usuario. La información sobre características de los productos, a la
            que se accede a través de este Sitio se obtiene de afirmaciones
            hechas por el fabricante, distribuidor y/o importador de cada
            producto. El Usuario debe tener en cuenta que, en ocasiones los
            fabricantes, distribuidores y/o importadores pueden alterar sus
            empaques y etiquetas, de manera que el verdadero embalaje del
            producto y materiales adjuntos pueden contener información diferente
            de la que se muestra en el Sitio. Itechnology recomienda
            especialmente que adicionalmente a la información presentada en
            línea, el Usuario lea las etiquetas, advertencias e instrucciones
            antes de adquirir, utilizar o en cualquier forma consumir un
            producto. Para obtener información adicional acerca de un producto,
            por favor póngase en contacto con el fabricante, distribuidor y/o
            importador.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item21")}
        >
          21. TERMINACIÓN
        </button>
        <div className="accordion-content" id="item21">
          <p>
            Estos Términos y Condiciones Generales implican un contrato que
            entrará en vigor tan pronto el Usuario acepte los Términos y
            Condiciones Generales y/o use los Servicios del Sitio y permanecerán
            vigentes hasta que el presente contrato sea terminado por el Usuario
            o por Itechnology. El Usuario puede rescindir este contrato en
            cualquier momento, siempre que lo haga para el futuro, evitando el
            uso de este Sitio y/o siendo Usuario registrado, renunciando a su
            registro siguiendo el procedimiento especialmente previsto para
            ello. Itechnology también puede rescindir este contrato en cualquier
            momento siendo válida la notificación de tal rescisión a los
            domicilios reales o electrónicos que el Usuario tuviere registrados
            en el Sitio. Asimismo, Itechnology podrá cancelar sin previo aviso
            la condición de Usuario, y en consecuencia denegar el acceso a los
            Servicios del Sitio o a comprar por esta vía, si el Usuario no
            cumpliera con cualquier término o disposición de los presentes
            Términos y Condiciones Generales. Esta cláusula se aplicará sea o no
            el Usuario un navegante registrado. Itechnology podrá en cualquier
            momento, temporal o permanentemente dar de baja este Sitio.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item22")}
        >
          22. CÓDIGOS DE DESCUENTO
        </button>
        <div className="accordion-content" id="item22">
          <p>
            Los códigos de descuento otorgados para compras online, tienen 30
            días de validez. En caso de no ser ocupado dentro del plazo
            estipulado, serán deshabilitados del sistema.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item23")}
        >
          23. DE LA JURISDICCIÓN
        </button>
        <div className="accordion-content" id="item23">
          <p>
            Este contrato será gobernado por y se interpretará según la
            legislación vigente en la República Argentina. Cualquier conflicto
            relacionado con este contrato o con el uso que el Usuario haga de
            este Sitio será resuelto por los tribunales ordinarios competentes
            según la legislación vigente y aplicable a la relación de consumo
            existente entre las partes. En caso de que dicha legislación no
            defina una competencia específica, será competente la justicia
            nacional ordinaria en asuntos comerciales con asiento en la Ciudad
            Resistencia, Chaco siendo aplicable esta disposición, aunque el
            Usuario estuviera realmente domiciliado fuera de los límites de la
            Ciudad Resistencia o de la República Argentina, por entenderse que
            este lugar ha sido el lugar de celebración del presente contrato.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item24")}
        >
          24. DOMICILIO
        </button>
        <div className="accordion-content" id="item24">
          <p>
            Se fija como domicilio de Itechnology, la calle Corrientes 2150, de
            la Ciudad de Córdoba, Córdoba República Argentina. Si tiene alguna
            duda sobre los Términos y Condiciones Generales o demás políticas y
            principios que rigen www.itechnology.com.ar consulta en atención al
            cliente.
          </p>
        </div>

        <button
          className="accordion-button"
          onClick={() => toggleAccordion("item25")}
        >
          25. COMPRA PROTEGIDA Y GARANTIA EXTENDIDA
        </button>
        <div className="accordion-content" id="item25">
          <p>
            COMPRA PROTEGIDA SEGUROS SURA SA: El seguro de COMPRA PROTEGIDA
            ofrece cobertura ante Robo y Daño Material Accidental durante 100
            días (vigencia válida para compras online) desde la fecha de compra
            a los productos que sean vendidos por Itechnology con dicha
            cobertura. Descripción de las Coberturas: Daño Material Accidental
            El asegurador indemnizará al asegurado los daños materiales sufridos
            como consecuencia de un accidente que afecte a los bienes muebles
            adquiridos con el seguro de Compra Protegida. Se cubrirán los
            accidentes ocurridos exclusivamente dentro de los 90 (noventa) días
            de adquirido el bien en cualquiera de nuestras sucursales. Robo El
            asegurador indemnizará al asegurado la pérdida causada por el robo
            de los bienes muebles adquiridos con el Seguro de Compra Protegida.
            Se entenderá que existe robo cuando medie apoderamiento ilegítimo de
            los bienes objeto del seguro, con fuerza en las cosas o intimidación
            o violencia en las personas, sea que tengan lugar antes del hecho
            para facilitarlo o en el acto de cometerlo o inmediatamente después,
            para lograr el fin propuesto o la impunidad (Art. 164 del Código
            Penal). Por intimidación se entenderá únicamente la amenaza directa
            o indirecta de daño físico inminente al asegurado o sus allegados.
            Se cubrirán los robos producidos exclusivamente dentro de los 90
            (noventa) días de adquirido el bien. EXCLUSIONES A LA COBERTURA: •
            Vicio propio, depreciación, desgaste, deterioro o rotura de
            cualquier pieza causados por el natural y normal manejo, uso o
            funcionamiento del bien. • El uso del bien contrariando las
            instrucciones del fabricante. • Acción de roedores, insectos,
            vermes, gérmenes, moho, oxidación, efectos de temperatura, vapores,
            humedad, humo, hollín, polvo, trepidaciones de máquinas, ruidos,
            olores y luminosidad. • Daños causados por fallas en el
            aprovisionamiento de la corriente eléctrica, gas o agua de la red
            pública. • Actos ilegales, fraude o abuso de o con respecto a los
            bienes asegurados. • Daños que se manifiesten exclusivamente como
            defectos estéticos, incluyendo pero no limitado a rayaduras en
            superficies pintadas, pulidas o esmaltadas. • Daños por los que sea
            responsable el fabricante o proveedor del bien asegurado, ya sea
            legal o contractualmente. • Hurto o extravío. Franquicia: Para
            celulares, cámara de fotos, tablets, notebooks y netbooks: 30% del
            valor del bien siniestrado. Para el resto de los productos: 10% del
            valor del bien siniestrado. Importante: La indemnización otorgada
            por Sura solamente puede ser utilizada para compra en Itechnology, o
            pago de cuotas de creditos vigentes. (NO SE ENTREGA DINERO) GARANTÍA
            EXTENDIDA - SEGUROS LA MERIDIONAL: Alcances de este Servicio: Las
            fallas por las cuales responde la Protección Itechnology son
            aquellas de tipo mecánico y/o electrónico. Se entiende por
            reparaciones, el cambio de piezas o partes del producto, no las
            limpiezas ni operaciones de mantenimiento. El artículo alcanzado por
            este servicio es el que figura en este contrato, y será reparado en
            la medida en que se encuentre dentro del territorio de la República
            Argentina. En el caso de que el producto no sea reparado en el
            término de 30 días, tomados desde el momento en que fue ingresado al
            taller de reparación (45 para computación), el cliente tendrá
            derecho a reclamar el reemplazo por un producto igual o de similares
            características al que figura en el presente contrato. Se conviene
            que en caso de contratar la cobertura de reemplazo para pequeños
            electrodomésticos, el mismo implica el reemplazo del producto con
            mal funcionamiento, por lo cual el titular se compromete a entregar
            en forma previa a Itechnology el aparato a reemplazar. Esta
            cobertura de reemplazo aplica para pequeños electrodomésticos cuyo
            precio de lista no supere los $3.000.- El presente contrato tendrá
            vigencia siempre y cuando el pago del producto que le da origen no
            se encuentre en mora. El titular de este contrato debe informar
            dentro de los tres (3) días de haber tomado conocimiento del
            desperfecto al teléfono que figura en este contrato. El presente
            contrato podrá ser rescindido por el contratante dentro de los 10
            días corridos desde su fecha de celebración, sin responsabilidad
            alguna a su cargo. De no hacerlo, se considerará que el contratante
            acepta las condiciones del mismo. Si el producto que aparece en este
            contrato sufriera un daño accidental que afectara el normal
            funcionamiento, dentro de los 100 días corridos desde la fecha de
            compra que aparece en la factura, el mismo será reparado. De no ser
            posible su reparación será reemplazado por otro igual o de similares
            características hasta el límite máximo de $100.000 con una
            franquicia de 25%. Si el producto fuera robado dentro de los 100
            días corridos desde la fecha de compra que aparece en la factura, el
            mismo será reemplazado por otro igual o de similares características
            hasta el límite máximo de $100.000 con una franquicia de 25%. Para
            el caso de robo del producto deberá presentar denuncia policial. Si
            fuera un celular, deberá adicionar un comprobante de la gestión
            realizada ante su proveedor del servicio, inherente al hecho. El
            reemplazo del producto, en cualquier circunstancia, implica la
            finalización del contrato. Los beneficios de daño accidental y robo
            sólo estarán vigentes si la Protección Itechnology es adquirida en
            el mismo momento que el producto. Quedan excluidos de este Servicio:
            Desperfectos causados como consecuencia de roturas por accidente
            (excepto hasta los 100 días posteriores a la fecha de compra del
            producto, de corresponder), daños estéticos, daños de pintura. Mal
            uso o uso indebido, uso comercial. Desgaste normal del equipo,
            depreciación. Sobretensión, problemas en suministros eléctrico, de
            agua o de gas, problemas en la línea telefónica. Cualquier
            desperfecto causado como consecuencia de fallas en unidades
            transformadoras, o generadores colocados en forma externa, y que no
            hayan sido provistas por el fabricante del equipo junto con éste.
            Gastos de mantenimiento. Número de serie alterado y reparaciones
            efectuadas por personal no autorizado. El uso de piezas no
            autorizadas o contrariando las instrucciones del fabricante La
            reposición de partes consumibles y/o accesorios, como cartuchos de
            tinta, pilas, baterías, etc. Periféricos como auriculares, teclados,
            mouse, controles remotos, visores VR, joysticks, entre otros. Daños
            por incendio, robo (excepto hasta los 100 días posteriores a la
            fecha de compra del producto, de corresponder), vandalismo,
            oxidación, derrames de líquidos. Daños derivados de la naturaleza,
            como inundación, lluvia, granizo. En caso de reemplazo de celulares,
            todo cargo adicional que la operadora del servicio telefónico
            solicite por el mismo. Hurto o extravío. Bienes consumibles o
            perecederos (incluyendo pero no limitado a alimentos, medicamentos,
            cosméticos) En el caso de Robo, se excluirá cuando el delito haya
            sido instigado o cometido por o en complicidad con cualquier miembro
            de la familia del Asegurado o personas allegadas. En caso de equipos
            de computación quedan fuera de este servicio además de los ya
            expuestos: El lucro cesante que pudiera acontecer durante el tiempo
            de reparación. Aquellos periféricos o partes que hayan sido
            agregados a posteriori de la compra original. Pérdida de datos en
            PC, programas y/o software. Los CPU Genéricos que posean una o más
            partes que no estuvieran dentro del listado de marcas aprobadas. En
            caso de equipos de computación, el cliente deberá respaldar sus
            archivos, antes de que el producto ingrese al servicio técnico.
          </p>
        </div>
      </div>
    </>
  );
};

export default TerminosYCondiciones;
